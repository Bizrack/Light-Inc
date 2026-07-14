"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode, ButtonHTMLAttributes } from "react";
import { clsx } from "clsx";

type Variant = "primary" | "secondary" | "ghost";

type Common = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
};

type ButtonAsButton = Common &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

type ButtonAsLink = Common & {
  href: string;
  target?: string;
  rel?: string;
  onClick?: ButtonHTMLAttributes<HTMLAnchorElement>["onClick"];
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { children, className, variant = "primary" } = props;
  const base =
    variant === "primary"
      ? "btn-primary"
      : variant === "secondary"
        ? "btn-secondary"
        : "inline-flex items-center gap-2 rounded-full px-4 py-2 text-[var(--fg-muted)] transition hover:text-[var(--gold-bright)]";

  const classes = clsx(base, className);

  if ("href" in props && props.href) {
    return (
      <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }} className="inline-flex">
        <Link
          href={props.href}
          className={classes}
          target={props.target}
          rel={props.rel}
          onClick={props.onClick}
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  const { type = "button", disabled, onClick, name, id, form } = props as ButtonAsButton;

  return (
    <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }} className="inline-flex">
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        name={name}
        id={id}
        form={form}
        className={classes}
      >
        {children}
      </button>
    </motion.div>
  );
}
