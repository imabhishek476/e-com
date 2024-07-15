import React from "react";

function index() {
  return (
    <>
      <div className="m-4 font-normal">
        <h1 className="underline text-[#050A44] decoration-pink-600 text-6xl">
          Terms of use
        </h1>
        <div className="mt-8 space-y-3">
          <h2 className="text-lg font-semibold">GDPR & Privacy Policy</h2>
          <p className="font-normal">
            vibepulse.com is committed to protecting your privacy online. This
            Privacy Policy endeavours to describe to you our practices regarding
            the personal information we collect from users on our website,
            located at lipsum.com (the “Site”), and the services offered through
            the Site. If you have any questions about our Privacy Policy, our
            collection practices, the processing of user information, or if you
            would like to report a security violation to us directly, please
            contact us at help@vibepulse.com <br />
            Please read this policy in conjunction with the{" "}
            <span className="underline">Freestar Privacy Policy</span>
          </p>
        </div>
        <div className="my-5">
          <h2 className="text-lg font-bold my-4">What Data We Collect</h2>
          <div className="space-y-2">
            <p className="font-normal">
              <span className="font-bold">General Data:</span>{" "}The use of our
              services will automatically create information that will be
              collected. For example, when you use our Services, your geographic
              location, how you use the Services, information about the type of
              device you use, your Open Device Identification Number, date/time
              stamps for your visit, your unique device identifier, your browser
              type, operating system, Internet Protocol (IP) address, and domain
              name are all collected. This information is generally used to help
              us deliver the most relevant information to you and administer and
              improve the Site.
            </p>
            <p className="font-normal">
              <span className="font-bold">Analytics:</span>{" "}We use analytics services (including, but not limited to, Google Analytics) to help analyze how users use the Site. Analytics services use Cookies to collect information such as how often users visit the Site and we use the information to improve our Site and Services. 
            </p>
            <p className="font-medium">The analytics services' ability to use and share information collected by them is restricted by their terms of use and privacy policy, which you should refer to for more information about how these entities use this information.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
