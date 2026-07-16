import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type {
  QuoteApplicant,
  QuoteDeposit,
  QuotePayment,
  QuoteTariff,
} from "@/lib/packages";
import type { FormSubmission } from "@/lib/submissions/types";

export type ContactDraft = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  interest: string;
};

export type QuoteDraft = {
  applicant: QuoteApplicant;
  payment: QuotePayment;
  deposit: QuoteDeposit;
  tariff: QuoteTariff;
  packageId: string;
  fullName: string;
  email: string;
  phone: string;
  state: string;
  budget: string;
  address: string;
  need: string;
  notes: string;
  nin: string;
  consent: boolean;
};

export type PartnerDraft = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  partnerType: string;
  state: string;
  website: string;
  message: string;
  consent: boolean;
};

export type CookieConsent = {
  decided: boolean;
  necessary: boolean;
  analytics: boolean;
  preferences: boolean;
  decidedAt: string | null;
};

export type AuthAccount = {
  name: string;
  email: string;
  /** Demo-only local credential — not for production */
  password: string;
};

export type UserPrefs = {
  visitedPages: string[];
  lastVisited: string | null;
  preferredCompany: string | null;
  newsletterEmail: string;
  hasSeenWelcome: boolean;
  cookieConsent: CookieConsent;
  authAccount: AuthAccount | null;
  isSignedIn: boolean;
};

type AppState = {
  user: UserPrefs;
  contactDraft: ContactDraft;
  quoteDraft: QuoteDraft;
  partnerDraft: PartnerDraft;
  /** Completed form submissions (contact / quote / newsletter / partner) */
  submissions: FormSubmission[];
  setContactDraft: (draft: Partial<ContactDraft>) => void;
  resetContactDraft: () => void;
  setQuoteDraft: (draft: Partial<QuoteDraft>) => void;
  resetQuoteDraft: () => void;
  setPartnerDraft: (draft: Partial<PartnerDraft>) => void;
  resetPartnerDraft: () => void;
  addSubmission: (submission: FormSubmission) => void;
  clearSubmissions: () => void;
  trackPage: (path: string) => void;
  setPreferredCompany: (slug: string) => void;
  setNewsletterEmail: (email: string) => void;
  markWelcomeSeen: () => void;
  acceptAllCookies: () => void;
  acceptNecessaryCookies: () => void;
  resetCookieConsent: () => void;
  createAccount: (account: AuthAccount) => { ok: true } | { ok: false; error: string };
  signIn: (email: string, password: string) => { ok: true } | { ok: false; error: string };
  signOut: () => void;
};

const emptyContact: ContactDraft = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  interest: "",
};

export const emptyQuote: QuoteDraft = {
  applicant: "individual",
  payment: "instalment",
  deposit: "40",
  tariff: "day",
  packageId: "s2",
  fullName: "",
  email: "",
  phone: "",
  state: "",
  budget: "",
  address: "",
  need: "",
  notes: "",
  nin: "",
  consent: false,
};

export const emptyPartner: PartnerDraft = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  partnerType: "",
  state: "",
  website: "",
  message: "",
  consent: false,
};

const emptyUser: UserPrefs = {
  visitedPages: [],
  lastVisited: null,
  preferredCompany: null,
  newsletterEmail: "",
  hasSeenWelcome: false,
  cookieConsent: {
    decided: false,
    necessary: true,
    analytics: false,
    preferences: false,
    decidedAt: null,
  },
  authAccount: null,
  isSignedIn: false,
};

const MAX_SUBMISSIONS = 100;

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      user: emptyUser,
      contactDraft: emptyContact,
      quoteDraft: emptyQuote,
      partnerDraft: emptyPartner,
      submissions: [],
      setContactDraft: (draft) =>
        set((state) => ({
          contactDraft: { ...state.contactDraft, ...draft },
        })),
      resetContactDraft: () => set({ contactDraft: emptyContact }),
      setQuoteDraft: (draft) =>
        set((state) => ({
          quoteDraft: { ...state.quoteDraft, ...draft },
        })),
      resetQuoteDraft: () => set({ quoteDraft: emptyQuote }),
      setPartnerDraft: (draft) =>
        set((state) => ({
          partnerDraft: { ...state.partnerDraft, ...draft },
        })),
      resetPartnerDraft: () => set({ partnerDraft: emptyPartner }),
      addSubmission: (submission) =>
        set((state) => ({
          submissions: [submission, ...state.submissions].slice(0, MAX_SUBMISSIONS),
        })),
      clearSubmissions: () => set({ submissions: [] }),
      trackPage: (path) => {
        const { user } = get();
        const visited = [path, ...user.visitedPages.filter((p) => p !== path)].slice(0, 20);
        set({
          user: {
            ...user,
            visitedPages: visited,
            lastVisited: path,
          },
        });
      },
      setPreferredCompany: (slug) =>
        set((state) => ({
          user: { ...state.user, preferredCompany: slug },
        })),
      setNewsletterEmail: (email) =>
        set((state) => ({
          user: { ...state.user, newsletterEmail: email },
        })),
      markWelcomeSeen: () =>
        set((state) => ({
          user: { ...state.user, hasSeenWelcome: true },
        })),
      acceptAllCookies: () =>
        set((state) => ({
          user: {
            ...state.user,
            cookieConsent: {
              decided: true,
              necessary: true,
              analytics: true,
              preferences: true,
              decidedAt: new Date().toISOString(),
            },
          },
        })),
      acceptNecessaryCookies: () =>
        set((state) => ({
          user: {
            ...state.user,
            cookieConsent: {
              decided: true,
              necessary: true,
              analytics: false,
              preferences: false,
              decidedAt: new Date().toISOString(),
            },
          },
        })),
      resetCookieConsent: () =>
        set((state) => ({
          user: {
            ...state.user,
            cookieConsent: emptyUser.cookieConsent,
          },
        })),
      createAccount: (account) => {
        const email = account.email.trim().toLowerCase();
        const name = account.name.trim();
        const password = account.password;
        if (!name || !email || password.length < 6) {
          return { ok: false, error: "Enter your name, email, and a password (6+ characters)." };
        }
        const { user } = get();
        if (user.authAccount && user.authAccount.email === email) {
          return { ok: false, error: "An account with this email already exists. Sign in instead." };
        }
        set({
          user: {
            ...user,
            authAccount: { name, email, password },
            isSignedIn: true,
          },
        });
        return { ok: true };
      },
      signIn: (email, password) => {
        const { user } = get();
        const normalized = email.trim().toLowerCase();
        if (!user.authAccount) {
          return { ok: false, error: "No account found. Create one below." };
        }
        if (user.authAccount.email !== normalized || user.authAccount.password !== password) {
          return { ok: false, error: "Incorrect email or password." };
        }
        set({ user: { ...user, isSignedIn: true } });
        return { ok: true };
      },
      signOut: () =>
        set((state) => ({
          user: { ...state.user, isSignedIn: false },
        })),
    }),
    {
      name: "light-inc-store-v4",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        user: state.user,
        contactDraft: state.contactDraft,
        quoteDraft: state.quoteDraft,
        partnerDraft: state.partnerDraft,
        submissions: state.submissions,
      }),
      merge: (persisted, current) => {
        const p = persisted as Partial<AppState> | undefined;
        const legacyQuote = { ...(p?.quoteDraft || {}) } as Partial<QuoteDraft> & {
          bvn?: string;
        };
        delete legacyQuote.bvn;
        return {
          ...current,
          ...p,
          quoteDraft: { ...emptyQuote, ...legacyQuote },
          contactDraft: { ...emptyContact, ...p?.contactDraft },
          partnerDraft: { ...emptyPartner, ...p?.partnerDraft },
          submissions: Array.isArray(p?.submissions) ? p.submissions : [],
          user: {
            ...emptyUser,
            ...p?.user,
            cookieConsent: {
              ...emptyUser.cookieConsent,
              ...p?.user?.cookieConsent,
            },
            authAccount: p?.user?.authAccount ?? emptyUser.authAccount,
            isSignedIn: p?.user?.isSignedIn ?? false,
          },
        };
      },
    }
  )
);
