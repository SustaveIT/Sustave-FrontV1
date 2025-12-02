const RegistrationForm = () => {
  return (
    
      <main className="flex-grow flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl space-y-8 shadow-lg p-10 rounded-md">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-text-light dark:text-text-dark sm:text-4xl">
              Basic Information
            </h1>
            <p className="mt-2 text-base text-muted-light dark:text-muted-dark">
              Let's start with your basic details
            </p>
          </div>
          <form action="#" className="mt-8 space-y-6">
            <div className="space-y-6">
              <div>
                <label
                  className="block text-sm font-medium text-text-light dark:text-text-dark"
                  htmlFor="full-name"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="mt-1 relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-muted-light dark:text-muted-dark">
                    person
                  </span>
                  <input
                    className="pl-10 appearance-none block w-full px-3 py-3 border border-border-light dark:border-border-dark rounded-lg placeholder-muted-light dark:placeholder-muted-dark focus:outline-none focus:ring-primary focus:border-primary sm:text-sm bg-surface-light dark:bg-surface-dark"
                    id="full-name"
                    name="full-name"
                    placeholder="Enter your full name"
                    required
                    type="text"
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-text-light dark:text-text-dark"
                  htmlFor="email-address"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="mt-1 relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-muted-light dark:text-muted-dark">
                    mail
                  </span>
                  <input
                    autoComplete="email"
                    className="pl-10 appearance-none block w-full px-3 py-3 border border-border-light dark:border-border-dark rounded-lg placeholder-muted-light dark:placeholder-muted-dark focus:outline-none focus:ring-primary focus:border-primary sm:text-sm bg-surface-light dark:bg-surface-dark"
                    id="email-address"
                    name="email"
                    placeholder="Enter your email"
                    required
                    type="email"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block text-sm font-medium text-text-light dark:text-text-dark"
                    htmlFor="password"
                  >
                    Password <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1 relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-muted-light dark:text-muted-dark">
                      lock
                    </span>
                    <input
                      autoComplete="new-password"
                      className="pl-10 pr-10 appearance-none block w-full px-3 py-3 border border-border-light dark:border-border-dark rounded-lg placeholder-muted-light dark:placeholder-muted-dark focus:outline-none focus:ring-primary focus:border-primary sm:text-sm bg-surface-light dark:bg-surface-dark"
                      id="password"
                      name="password"
                      placeholder="Create password"
                      required
                      type="password"
                    />
                    <button
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-muted-light dark:text-muted-dark">
                        visibility
                      </span>
                    </button>
                  </div>
                  <p className="mt-2 text-xs text-muted-light dark:text-muted-dark">
                    At least 8 characters
                  </p>
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-text-light dark:text-text-dark"
                    htmlFor="confirm-password"
                  >
                    Confirm Password <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1 relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-muted-light dark:text-muted-dark">
                      lock
                    </span>
                    <input
                      autoComplete="new-password"
                      className="pl-10 pr-10 appearance-none block w-full px-3 py-3 border border-border-light dark:border-border-dark rounded-lg placeholder-muted-light dark:placeholder-muted-dark focus:outline-none focus:ring-primary focus:border-primary sm:text-sm bg-surface-light dark:bg-surface-dark"
                      id="confirm-password"
                      name="confirm-password"
                      placeholder="Confirm password"
                      required
                      type="password"
                    />
                    <button
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-muted-light dark:text-muted-dark">
                        visibility
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-text-light dark:text-text-dark">
                Choose Your Role
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <label className="relative flex flex-col p-6 border-2 border-border-light dark:border-border-dark rounded-lg cursor-pointer hover:border-primary dark:hover:border-primary transition-all has-[:checked]:border-primary has-[:checked]:ring-2 has-[:checked]:ring-primary has-[:checked]:bg-primary/5">
                  <input
                    className="sr-only"
                    name="role"
                    type="radio"
                    value="investor"
                  />
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-yellow/10 mb-4">
                      <span className="material-symbols-outlined text-3xl text-accent-yellow">
                        payments
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold">Investor</h4>
                    <p className="mt-2 text-sm text-muted-light dark:text-muted-dark">
                      Earn returns while creating positive impact
                    </p>
                    <ul className="mt-4 space-y-2 text-xs text-left text-muted-light dark:text-muted-dark list-disc list-inside">
                      <li>8% quarterly returns</li>
                      <li>Carbon credit rewards</li>
                      <li>Real-time tracking</li>
                    </ul>
                  </div>
                </label>
                <label className="relative flex flex-col p-6 border-2 border-border-light dark:border-border-dark rounded-lg cursor-pointer hover:border-primary dark:hover:border-primary transition-all has-[:checked]:border-primary has-[:checked]:ring-2 has-[:checked]:ring-primary has-[:checked]:bg-primary/5">
                  <input
                    checked
                    className="sr-only"
                    name="role"
                    type="radio"
                    value="farmer"
                  />
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-green/10 mb-4">
                      <span className="material-symbols-outlined text-3xl text-accent-green">
                        potted_plant
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold">Farmer</h4>
                    <p className="mt-2 text-sm text-muted-light dark:text-muted-dark">
                      Join our network of moringa cultivators
                    </p>
                    <ul className="mt-4 space-y-2 text-xs text-left text-muted-light dark:text-muted-dark list-disc list-inside">
                      <li>Guaranteed market</li>
                      <li>IoT technology</li>
                      <li>Fair trade premiums</li>
                    </ul>
                  </div>
                </label>
                <label className="relative flex flex-col p-6 border-2 border-border-light dark:border-border-dark rounded-lg cursor-pointer hover:border-primary dark:hover:border-primary transition-all has-[:checked]:border-primary has-[:checked]:ring-2 has-[:checked]:ring-primary has-[:checked]:bg-primary/5">
                  <input
                    className="sr-only"
                    name="role"
                    type="radio"
                    value="franchise-owner"
                  />
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-blue/10 mb-4">
                      <span className="material-symbols-outlined text-3xl text-accent-blue">
                        storefront
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold">Franchise Owner</h4>
                    <p className="mt-2 text-sm text-muted-light dark:text-muted-dark">
                      Build your moringa product business
                    </p>
                    <ul className="mt-4 space-y-2 text-xs text-left text-muted-light dark:text-muted-dark list-disc list-inside">
                      <li>Proven model</li>
                      <li>Marketing support</li>
                      <li>Community impact</li>
                    </ul>
                  </div>
                </label>
              </div>
            </div>
            <div className="flex justify-end pt-4">
              <button
                className="group flex items-center justify-center py-3 px-6 border border-transparent text-sm font-medium rounded-lg text-white bg-primary hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-opacity"
                type="submit"
              >
                Continue
                <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>
          </form>
        </div>
      </main>
    
  );
};

export default RegistrationForm;
