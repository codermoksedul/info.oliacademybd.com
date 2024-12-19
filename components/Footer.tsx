"use client";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 rounded-3xl mt-5 p-3 text-center">
      © {year} OLI Academy
    </footer>
  );
}
