import React from "react";
import FooterSocial from "./FooterSocial";
import FooterLink from "./FooterLink";

function Footer() {
  return (
    <footer className="w-full py-12 h-auto border-b-[1px] border-b-black grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      <FooterSocial />

      <FooterLink
        title="QUICK LINK"
        link1="about"
        link2="portfolio"
        link3="services"
        link4="blog"
        link5="contact"
      />
      <FooterLink
        title="RESOURCES"
        link1="Authentication"
        link2="System Status"
        link3="Terms of Service"
        link4="Pricing"
        link5="Over Right"
      />
      <FooterLink
        title="DEVELOPERS"
        link1="Documentation"
        link2="Authentication"
        link3="API Reference"
        link4="Support"
        link5="Open Source"
      />
    </footer>
  );
}

export default Footer;
