export default function ContactForm() {
  return (
    <form className="mt-10">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Jane Smith"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-slate-900 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="email@gmail.com"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-slate-900 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={8}
          placeholder="Hello!"
          className="w-full resize-y rounded-xl border border-gray-300 px-4 py-3 text-slate-900 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
        />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <input id="subscribe" name="subscribe" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
        <label htmlFor="subscribe" className="text-sm text-slate-700">
          Subscribe to Newsletter
        </label>
      </div>

      <div className="mt-6 flex justify-center md:justify-start">
        <button
          type="submit"
          className="w-full rounded-full bg-indigo-900 px-8 py-4 text-base font-semibold text-white shadow-sm transition-colors hover:bg-indigo-800 md:w-auto md:px-10 md:py-4"
        >
          Send message
        </button>
      </div>
    </form>
  );
}


