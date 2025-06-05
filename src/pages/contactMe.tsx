import { useState } from 'react';

export const ContactMe = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Log the form data
        console.log('Form submitted:', { name, email, message });

        setIsSubmitted(true);

        // Clear fields
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="mx-10 flex flex-col items-center" style={{ fontFamily: "ubuntu mono" }}>
            <div className="flex sm:text-7xl text-3xl font-medium mt-20 flex-col">
                Let's Connect 👋
            </div>
            <div className="text-2xl sm:w-1/2 mt-4 text-center flex flex-col gap-2">
                <div>Got a project?</div>
                <div>Need a developer?</div>
                <div>Or just want to connect? Hit me up and let's make it happen.</div>
            </div>

            {isSubmitted ? (
                <div className="text-2xl mt-8 text-center">
                    Thank you for your message! I'll get back to you soon.
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="mt-8 w-full max-w-lg">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-black border-gray-600 text-white"
                            id="name"
                            name="user_name"
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-black border-gray-600 text-white"
                            id="email"
                            type="email"
                            name="user_email"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-black border-gray-600 text-white"
                            id="message"
                            name="message"
                            rows={4}
                            placeholder="Your Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
                            type="submit"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};