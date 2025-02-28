import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Sprout",
  description: "Privacy policy for Sprout addiction recovery platform",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container max-w-4xl mx-auto py-12 px-4 md:px-6">
      <article className="prose dark:prose-invert prose-headings:font-bold prose-headings:text-primary prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:text-muted-foreground prose-a:text-primary max-w-none">
        <h1>Privacy Policy</h1>
        <p className="text-lg text-foreground">
          Last Updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <h2>Introduction</h2>
        <p>
          Welcome to Sprout (&quot;we&quot;, &quot;our&quot;, or
          &quot;us&quot;). We are committed to protecting your personal
          information and your right to privacy. This Privacy Policy explains
          how we collect, use, disclose, and safeguard your information when you
          use our addiction recovery platform.
        </p>
        <p>
          Please read this privacy policy carefully. If you do not agree with
          the terms of this privacy policy, please do not access the platform.
        </p>

        <h2>Information We Collect</h2>
        <p>
          We collect information that you voluntarily provide to us when you
          register on the platform, express an interest in obtaining information
          about us or our products and services, or otherwise contact us.
        </p>

        <h3>Personal Information</h3>
        <p>
          The personal information that we collect depends on the context of
          your interactions with us and the platform, the choices you make, and
          the products and features you use. The personal information we collect
          may include:
        </p>
        <ul>
          <li>Name and contact information (email address, phone number)</li>
          <li>Account credentials (username, password)</li>
          <li>Profile information (recovery goals, progress data)</li>
          <li>Usage data and platform interactions</li>
        </ul>

        <h3>Sensitive Information</h3>
        <p>
          When necessary for providing our services, we may collect information
          related to your health and recovery journey. This information is
          treated with the highest level of confidentiality and security.
        </p>

        <h2>How We Use Your Information</h2>
        <p>
          We use your information for a variety of business purposes, including:
        </p>
        <ul>
          <li>To provide and maintain our platform</li>
          <li>To personalize your experience</li>
          <li>To improve our platform and develop new features</li>
          <li>
            To communicate with you about updates, security alerts, and support
          </li>
          <li>To provide customer support</li>
          <li>To process transactions</li>
          <li>To protect our platform from abuse and illegal activities</li>
        </ul>

        <h2>Sharing Your Information</h2>
        <p>We may share information in the following situations:</p>
        <ul>
          <li>
            <strong>With your consent:</strong> We may disclose your information
            when you have explicitly consented to the disclosure.
          </li>
          <li>
            <strong>With service providers:</strong> We may share your
            information with third-party vendors who provide services on our
            behalf.
          </li>
          <li>
            <strong>For legal purposes:</strong> We may disclose your
            information where required to do so by law or in response to valid
            requests by public authorities.
          </li>
          <li>
            <strong>To protect our rights:</strong> We may disclose your
            information to protect our rights, privacy, safety, or property.
          </li>
        </ul>

        <h2>Data Security</h2>
        <p>
          We have implemented appropriate technical and organizational security
          measures designed to protect the security of any personal information
          we process. However, despite our safeguards, no security system is
          impenetrable, and we cannot guarantee the security of our systems
          100%.
        </p>

        <h2>Your Privacy Rights</h2>
        <p>
          Depending on your location, you may have certain rights regarding your
          personal information, including:
        </p>
        <ul>
          <li>
            The right to access the personal information we have about you
          </li>
          <li>
            The right to request correction of inaccurate personal information
          </li>
          <li>The right to request deletion of your personal information</li>
          <li>
            The right to withdraw consent to processing of your personal
            information
          </li>
          <li>
            The right to object to processing of your personal information
          </li>
          <li>The right to data portability</li>
        </ul>

        <h2>Children&apos;s Privacy</h2>
        <p>
          Our platform is not intended for individuals under the age of 18. We
          do not knowingly collect personal information from children. If you
          are a parent or guardian and believe your child has provided us with
          personal information, please contact us.
        </p>

        <h2>Updates to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. The updated
          version will be indicated by an updated &quot;Last Updated&quot; date.
          We encourage you to review this privacy policy frequently to be
          informed of how we are protecting your information.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions or comments about this policy, you may contact
          us at:
        </p>
        <p>
          Sprout
          <br />
          Email: privacy@sproutrecovery.com
          <br />
          Address: 123 Recovery Lane, Wellness City, WC 12345
        </p>
      </article>
    </div>
  );
}
