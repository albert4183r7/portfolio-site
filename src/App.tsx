import React from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-6 md:p-12">
      <section className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-2">Your Name</h1>
        <p className="text-lg text-gray-600">
          Final-Year Tech Student @ ITB | AI & Cloud Enthusiast | Python • Bash • AWS • GCP
        </p>
        <div className="mt-4 space-x-4">
          <Button variant="outline" asChild>
            <a href="https://github.com/yourname" target="_blank">GitHub</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://linkedin.com/in/yourname" target="_blank">LinkedIn</a>
          </Button>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid gap-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">AI-Powered Customer Sentiment Analysis</h3>
              <p className="text-gray-600">Classifies telco customer reviews with Python, scikit-learn, Flask. Deployed on Heroku.</p>
              <a href="https://github.com/yourname/sentiment-app" className="text-blue-500 underline" target="_blank">View on GitHub</a>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">Cloud-Based Website Deployer</h3>
              <p className="text-gray-600">Bash script to automate static site deployment to AWS S3 with GitHub Actions.</p>
              <a href="https://github.com/yourname/cloud-deploy-bash" className="text-blue-500 underline" target="_blank">View on GitHub</a>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">WiFi Analyzer CLI Tool</h3>
              <p className="text-gray-600">Python tool that scans and visualizes WiFi signal strength using scapy & matplotlib.</p>
              <a href="https://github.com/yourname/wifi-analyzer" className="text-blue-500 underline" target="_blank">View on GitHub</a>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Google Cloud Digital Leader – 2024</li>
          <li>AWS Certified Cloud Practitioner – 2024</li>
          <li>Linux Essentials (LPI) – 2023</li>
          <li>Coursera: Machine Learning by Andrew Ng</li>
        </ul>
      </section>
    </main>
  );
}
