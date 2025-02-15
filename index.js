import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center p-6">
      <Head>
        <title>Lead the North 2025</title>
        <meta name="description" content="Hamilton's largest youth leadership summit" />
      </Head>
      
      <header className="text-4xl font-bold text-blue-600">Lead the North 2025</header>
      <p className="text-lg text-gray-700 mt-2">To the North and Beyond 🚀</p>
      
      <main className="mt-6">
        <p className="text-xl text-gray-800">Hamilton’s largest youth leadership summit is coming soon.</p>
        <p className="text-md text-gray-600 mt-2">Stay tuned for details on speakers, workshops, and how you can be part of it.</p>
      </main>
      
      <footer className="mt-10 text-gray-500">
        <p>Follow us on social media for updates!</p>
      </footer>
    </div>
  );
}