import React, { useEffect, useState } from 'react';
import { trace } from '@opentelemetry/api';
import { CodeCovOpenTelemetry } from '@codecov/node-codecov-opentelemetry';
import { NodeTracerProvider } from '@opentelemetry/sdk-trace-node';
import { BatchSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { SpanKind } from '@opentelemetry/api';

function App({ Component, pageProps }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Setup OpenTelemetry
    const provider = new NodeTracerProvider();
    provider.register();

    // Create a Codecov OpenTelemetry instance
    const codecov = new CodeCovOpenTelemetry({
      repositoryToken: process.env.CODECOV_TOKEN, // Replace with your actual token
      environment: "production", // or other environments like 'development'
      versionIdentifier: "v0.0.1", // Version of your app or a unique identifier
      filters: {
        allowedSpanKinds: [SpanKind.SERVER], // Specify span kinds to be tracked
      },
      codecovEndpoint: "https://api.codecov.io", // Codecov API endpoint
      sampleRate: 1, // Sampling rate for spans
      untrackedExportRate: 1, // Rate for untracked spans
      code: 'production::v0.0.1', // Environment and version identifier
    });

    // Add the Codecov span processor
    provider.addSpanProcessor(codecov.processor);
    provider.addSpanProcessor(new BatchSpanProcessor(codecov.exporter));

    // Example span creation
    const tracer = trace.getTracer('default');
    const span = tracer.startSpan('app-init');

    // Fetch data or perform some operation
    fetch('http://localhost:8081/api')
      .then(res => res.json())
      .then(data => {
        setData(data.message);
        span.end(); // End the span after operation is complete
      })
      .catch(err => {
        span.recordException(err);
        span.end();
      });

  }, []);

  return (
    <div>
      <h1>{data ? data : "Loading..."}</h1>
      <Component {...pageProps} />
    </div>
  );
}

export default App;




