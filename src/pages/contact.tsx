import Layout from "@/layouts/Layout";

export default function Contact() {
  return (
    <Layout>
      <div className="">
        <div className="flex flex-col pr-16">
          <h2 className="text-3xl font-semibold tracking-tight">Contact</h2>
          <p className="my-4 text-lg">
            We would love to hear from you! Whether you have a question about
            our work, are interested in collaborating with us, or simply want to
            say hello, please don’t hesitate to get in touch.
          </p>
          <p className="my-4 text-lg">
            You can reach us via the contact form on our website or by emailing
            us directly at{" "}
            <a
              className="text-blue-600 underline"
              href="mailto:hello@example.com"
            >
              hello@example.com
            </a>
            . We aim to respond to all inquiries within 48 hours.
          </p>
          <p className="my-4 text-lg">
            Additionally, we invite you to follow us on social media to stay
            up-to-date on our latest projects and news. You can find us on{" "}
            <a className="text-blue-600" href="#">
              Facebook
            </a>
            ,{" "}
            <a className="text-blue-600" href="#">
              Twitter
            </a>
            , and{" "}
            <a className="text-blue-600" href="#">
              Instagram
            </a>
            .
          </p>
          <p className="my-4 text-lg">
            Thank you for your interest in our work. We look forward to
            connecting with you and discussing how we can work together to make
            a positive impact.
          </p>
        </div>
        {/* <form
      action=""
      className="flex flex-col"
     >
      <label htmlFor="name">Your name</label>
      <input type="text" name="name" id="name" placeholder="John Doe"
       className="px-4 py-3 border-black outline-none focus:border-b-2"
      />

      <label htmlFor="email">Your email</label>
      <input type="email" name="name" id="name" placeholder="johndoe@email.com"
       className="px-4 py-3 border-black outline-none focus:border-b-2"
      />

      <label htmlFor="message">Your message</label>
      <textarea type="text" name="message" id="message"
       defaultValue="Would love to work with you!"
       className="px-4 py-3 border-black outline-none focus:border-b-2"
      />
     </form> */}
      </div>
    </Layout>
  );
}
