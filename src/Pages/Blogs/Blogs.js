import React from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div>
      <h1 className="text-yellow-400 text-5xl mb-6 mt-5 font-bold">
        Questions Are Here!!
      </h1>
      <div className="card lg:card-side bg-base-100 text-start mt-10 shadow-2xl mb-6">
        <figure>
          <img src="https://placeimg.com/400/400/arch" alt="Album" />
        </figure>
        <div className="card-body">
          <h1 className="card-title text-slate-100">What is Cor's?</h1>
          <p className=" w-96">
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based
            mechanism that allows a server to indicate any origins (domain,
            scheme, or port) other than its own from which a browser should
            permit loading resources.
          </p>
          <div className="card-actions justify-end">
          <Link to='/'> <button className="btn btn-primary">More Option</button></Link>
          </div>
        </div>
      </div>

      <div className="card lg:card-side  text-start bg-base-100 shadow-2xl mb-6">
        <figure>
          <img src="https://placeimg.com/400/400/arch" alt="Album" />
        </figure>
        <div className="card-body">
          <h1 className="card-title text-slate-100">
            Why are you using firebase? What other option do you have implement
            authentication?
          </h1>
          <p className=" w-96">
            Firebase helps you develop high-quality apps, grow your user base,
            and earn more money. Each feature works independently, and they work
            even better together. 12 User Authentication Platforms [Auth0,
            Firebase Alternatives] STYTCH. Ory. Supabase. Okta. PingIdentity.
            Keycloak. Frontegg. Authress.
          </p>
          <div className="card-actions justify-end">
          <Link to='/'> <button className="btn btn-primary">More Option</button></Link>
          </div>
        </div>
      </div>

      <div className="card lg:card-side  text-start bg-base-100 shadow-2xl mb-6">
        <figure>
          <img src="https://placeimg.com/400/400/arch" alt="Album" />
        </figure>
        <div className="card-body">
          <h1 className="card-title text-slate-100">
            How does the private route work?
          </h1>
          <p className=" w-96">
            The private route component is similar to the public route, the only
            change is that redirect URL and authenticate condition. If the user
            is not authenticated he will be redirected to the login page and the
            user can only access the authenticated routes If he is authenticated
            (Logged in).
          </p>
          <div className="card-actions justify-end">
          <Link to='/'> <button className="btn btn-primary">More Option</button></Link>
          </div>
        </div>
      </div>

      <div className="card lg:card-side text-start bg-base-100 mb-6 shadow-2xl">
        <figure>
          <img src="https://placeimg.com/400/400/arch" alt="Album" />
        </figure>
        <div className="card-body">
          <h1 className="card-title text-slate-100">What is Node? How does node work?</h1>
          <p className=" w-96">
            Node.js is an open-source, cross-platform, back-end JavaScript
            runtime environment that runs on the V8 engine and executes
            JavaScript code outside a web browser.It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
          </p>
          <div className="card-actions justify-end">
           <Link to='/'> <button className="btn btn-primary">More Option</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
