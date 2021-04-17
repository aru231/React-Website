import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="bg-light text-center text-white">
        <div class="container p-4 pb-0">
          <section class="mb-4">
            <a class="btn btn-primary btn-floating m-1" href="#!" role="button">
              <i class="fab fa-facebook-f" />
            </a>

            <a class="btn btn-primary btn-floating m-1" href="#!" role="button">
              <i class="fab fa-twitter" />
            </a>

            <a class="btn btn-primary btn-floating m-1" href="#!" role="button">
              <i class="fab fa-google" />
            </a>

            <a class="btn btn-primary btn-floating m-1" href="#!" role="button">
              <i class="fab fa-instagram" />
            </a>

            <a class="btn btn-primary btn-floating m-1" href="#!" role="button">
              <i class="fab fa-linkedin-in" />
            </a>

            <a class="btn btn-primary btn-floating m-1" href="#!" role="button">
              <i class="fab fa-github" />
            </a>
          </section>
        </div>

        <div class="text-center p-3">
          © 2020 Copyright:
          <a class="text-white" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
