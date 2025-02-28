import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Sprout",
  description:
    "Terms and conditions for using the Sprout addiction recovery platform",
};

export default function TermsOfServicePage() {
  return (
    <div className="container max-w-4xl mx-auto py-12 px-4 md:px-6">
      <article className="prose dark:prose-invert prose-headings:font-bold prose-headings:text-primary prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:text-muted-foreground prose-a:text-primary max-w-none">
        <h1>Terms of Service</h1>
        <p className="text-lg text-foreground">
          Last Updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <h2>Agreement to Terms</h2>
        <p>
          These Terms of Service constitute a legally binding agreement made
          between you and Sprout (&quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;), concerning your access to and use of the Sprout
          addiction recovery platform.
        </p>
        <p>
          You agree that by accessing the platform, you have read, understood,
          and agree to be bound by all of these Terms of Service. If you do not
          agree with all of these terms, you are prohibited from using the
          platform and must discontinue use immediately.
        </p>

        <h2>Intellectual Property Rights</h2>
        <p>
          Unless otherwise indicated, the platform is our proprietary property
          and all source code, databases, functionality, software, website
          designs, audio, video, text, photographs, and graphics on the platform
          (collectively, the &quot;Content&quot;) and the trademarks, service
          marks, and logos contained therein (the &quot;Marks&quot;) are owned
          or controlled by us or licensed to us, and are protected by copyright
          and trademark laws and various other intellectual property rights.
        </p>
        <p>
          The Content and Marks are provided on the platform &quot;AS IS&quot;
          for your information and personal use only. Except as expressly
          provided in these Terms of Service, no part of the platform and no
          Content or Marks may be copied, reproduced, aggregated, republished,
          uploaded, posted, publicly displayed, encoded, translated,
          transmitted, distributed, sold, licensed, or otherwise exploited for
          any commercial purpose whatsoever, without our express prior written
          permission.
        </p>

        <h2>User Representations</h2>
        <p>By using the platform, you represent and warrant that:</p>
        <ol>
          <li>
            All registration information you submit will be true, accurate,
            current, and complete.
          </li>
          <li>
            You will maintain the accuracy of such information and promptly
            update such registration information as necessary.
          </li>
          <li>
            You have the legal capacity and you agree to comply with these Terms
            of Service.
          </li>
          <li>You are not under the age of 18.</li>
          <li>
            You will not access the platform through automated or non-human
            means.
          </li>
          <li>
            You will not use the platform for any illegal or unauthorized
            purpose.
          </li>
          <li>
            Your use of the platform will not violate any applicable law or
            regulation.
          </li>
        </ol>

        <h2>User Registration</h2>
        <p>
          You may be required to register with the platform. You agree to keep
          your password confidential and will be responsible for all use of your
          account and password. We reserve the right to remove, reclaim, or
          change a username you select if we determine, in our sole discretion,
          that such username is inappropriate, obscene, or otherwise
          objectionable.
        </p>

        <h2>Prohibited Activities</h2>
        <p>
          You may not access or use the platform for any purpose other than that
          for which we make the platform available. The platform may not be used
          in connection with any commercial endeavors except those that are
          specifically endorsed or approved by us.
        </p>
        <p>As a user of the platform, you agree not to:</p>
        <ul>
          <li>
            Systematically retrieve data or other content from the platform to
            create or compile, directly or indirectly, a collection,
            compilation, database, or directory.
          </li>
          <li>
            Trick, defraud, or mislead us and other users, especially in any
            attempt to learn sensitive account information.
          </li>
          <li>
            Circumvent, disable, or otherwise interfere with security-related
            features of the platform.
          </li>
          <li>
            Disparage, tarnish, or otherwise harm, in our opinion, us and/or the
            platform.
          </li>
          <li>
            Use any information obtained from the platform in order to harass,
            abuse, or harm another person.
          </li>
          <li>
            Make improper use of our support services or submit false reports of
            abuse or misconduct.
          </li>
          <li>
            Use the platform in a manner inconsistent with any applicable laws
            or regulations.
          </li>
          <li>
            Upload or transmit (or attempt to upload or to transmit) viruses,
            Trojan horses, or other material, that interferes with any
            party&apos;s uninterrupted use and enjoyment of the platform.
          </li>
        </ul>

        <h2>User Generated Contributions</h2>
        <p>
          The platform may invite you to chat, contribute to, or participate in
          blogs, message boards, online forums, and other functionality, and may
          provide you with the opportunity to create, submit, post, display,
          transmit, perform, publish, distribute, or broadcast content and
          materials to us or on the platform, including but not limited to text,
          writings, video, audio, photographs, graphics, comments, suggestions,
          or personal information or other material (collectively,
          &quot;Contributions&quot;).
        </p>
        <p>
          Any Contributions you transmit to the platform will be treated as
          non-confidential and non-proprietary. By providing any Contribution to
          the platform, you warrant that you have the right to provide the
          Contribution and that it does not violate any of our policies.
        </p>

        <h2>Contribution License</h2>
        <p>
          By posting your Contributions to any part of the platform, you
          automatically grant, and you represent and warrant that you have the
          right to grant, to us an unrestricted, unlimited, irrevocable,
          perpetual, non-exclusive, transferable, royalty-free, fully-paid,
          worldwide right, and license to host, use, copy, reproduce, disclose,
          sell, resell, publish, broadcast, retitle, archive, store, cache,
          publicly perform, publicly display, reformat, translate, transmit,
          excerpt (in whole or in part), and distribute such Contributions for
          any purpose, commercial, advertising, or otherwise, and to prepare
          derivative works of, or incorporate into other works, such
          Contributions, and grant and authorize sublicenses of the foregoing.
        </p>

        <h2>Submissions</h2>
        <p>
          You acknowledge and agree that any questions, comments, suggestions,
          ideas, feedback, or other information regarding the platform
          (&quot;Submissions&quot;) provided by you to us are non-confidential
          and shall become our sole property. We shall own exclusive rights,
          including all intellectual property rights, and shall be entitled to
          the unrestricted use and dissemination of these Submissions for any
          lawful purpose, commercial or otherwise, without acknowledgment or
          compensation to you.
        </p>

        <h2>Third-Party Websites and Content</h2>
        <p>
          The platform may contain links to other websites (&quot;Third-Party
          Websites&quot;) as well as articles, photographs, text, graphics,
          pictures, designs, music, sound, video, information, applications,
          software, and other content or items belonging to or originating from
          third parties (&quot;Third-Party Content&quot;). Such Third-Party
          Websites and Third-Party Content are not investigated, monitored, or
          checked for accuracy, appropriateness, or completeness by us, and we
          are not responsible for any Third-Party Websites accessed through the
          platform or any Third-Party Content posted on, available through, or
          installed from the platform.
        </p>

        <h2>Platform Management</h2>
        <p>
          We reserve the right, but not the obligation, to: (1) monitor the
          platform for violations of these Terms of Service; (2) take
          appropriate legal action against anyone who, in our sole discretion,
          violates the law or these Terms of Service; (3) in our sole discretion
          and without limitation, refuse, restrict access to, limit the
          availability of, or disable (to the extent technologically feasible)
          any of your Contributions or any portion thereof; (4) in our sole
          discretion and without limitation, notice, or liability, to remove
          from the platform or otherwise disable all files and content that are
          excessive in size or are in any way burdensome to our systems; and (5)
          otherwise manage the platform in a manner designed to protect our
          rights and property and to facilitate the proper functioning of the
          platform.
        </p>

        <h2>Term and Termination</h2>
        <p>
          These Terms of Service shall remain in full force and effect while you
          use the platform. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS
          OF SERVICE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND
          WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE PLATFORM
          (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY
          REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF
          ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OF
          SERVICE OR OF ANY APPLICABLE LAW OR REGULATION.
        </p>

        <h2>Modifications and Interruptions</h2>
        <p>
          We reserve the right to change, modify, or remove the contents of the
          platform at any time or for any reason at our sole discretion without
          notice. We also reserve the right to modify or discontinue all or part
          of the platform without notice at any time.
        </p>
        <p>
          We will not be liable to you or any third party for any modification,
          suspension, or discontinuance of the platform.
        </p>

        <h2>Governing Law</h2>
        <p>
          These Terms shall be governed by and defined following the laws of
          [Your Country/State]. Sprout and yourself irrevocably consent that the
          courts of [Your Country/State] shall have exclusive jurisdiction to
          resolve any dispute which may arise in connection with these terms.
        </p>

        <h2>Dispute Resolution</h2>
        <p>
          You agree to irrevocably submit all disputes related to Terms or the
          relationship established by this Agreement to the jurisdiction of the
          [Your Country/State] courts. Sprout shall also maintain the right to
          bring proceedings as to the substance of the matter in the courts of
          the country where you reside or, if these Terms are entered into in
          the course of your trade or profession, the state of your principal
          place of business.
        </p>

        <h2>Corrections</h2>
        <p>
          There may be information on the platform that contains typographical
          errors, inaccuracies, or omissions, including descriptions, pricing,
          availability, and various other information. We reserve the right to
          correct any errors, inaccuracies, or omissions and to change or update
          the information on the platform at any time, without prior notice.
        </p>

        <h2>Disclaimer</h2>
        <p>
          THE PLATFORM IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE
          THAT YOUR USE OF THE PLATFORM AND OUR SERVICES WILL BE AT YOUR SOLE
          RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL
          WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE PLATFORM AND
          YOUR USE THEREOF.
        </p>

        <h2>Limitations of Liability</h2>
        <p>
          IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE
          TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL,
          EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST
          PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR
          USE OF THE PLATFORM, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY
          OF SUCH DAMAGES.
        </p>

        <h2>Indemnification</h2>
        <p>
          You agree to defend, indemnify, and hold us harmless, including our
          subsidiaries, affiliates, and all of our respective officers, agents,
          partners, and employees, from and against any loss, damage, liability,
          claim, or demand, including reasonable attorneys&apos; fees and
          expenses, made by any third party due to or arising out of: (1) your
          Contributions; (2) use of the platform; (3) breach of these Terms of
          Service; (4) any breach of your representations and warranties set
          forth in these Terms of Service; (5) your violation of the rights of a
          third party, including but not limited to intellectual property
          rights; or (6) any overt harmful act toward any other user of the
          platform with whom you connected via the platform.
        </p>

        <h2>Contact Us</h2>
        <p>
          In order to resolve a complaint regarding the platform or to receive
          further information regarding use of the platform, please contact us
          at:
        </p>
        <p>
          Sprout
          <br />
          Email: legal@sproutrecovery.com
          <br />
          Address: 123 Recovery Lane, Wellness City, WC 12345
        </p>
      </article>
    </div>
  );
}
