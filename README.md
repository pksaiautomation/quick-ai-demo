# Amazon Quick Embedded Custom Chat Agent Demo Website

This is a small local website you can use to demonstrate how an existing production application can introduce an AI assistant panel with minimal UI changes.

## Local mock demo

```bash
cd quick-embedded-agent-demo
python -m http.server 8080
```

Open:

```text
http://localhost:8080
```

Click **Open AI Assistant**. This shows a mock chat panel for presentation/demo purposes.

## Add sample context to Amazon Quick

1. Open Amazon Quick.
2. Create a Space, for example `OrderHub Demo Space`.
3. Upload the files in the `context/` folder.
4. Create a custom chat agent using the Space as scoped knowledge.
5. Suggested agent instruction:

```text
You are the OrderHub business-context assistant. Answer only from the OrderHub Demo Space files. Explain customer, order, incident, business process, and application impact in clear business language. Do not perform write actions unless an approved tool/action is configured and the user confirms.
```

## Real embedded chat option

For production-style embedding, AWS provides a reference sample that uses CloudFront, Cognito, API Gateway, Lambda, OIDC federation, and the Quick Suite Embedding SDK to generate secure user-specific embed URLs.

```bash
git clone https://github.com/aws-samples/sample-quicksuite-chat-embedding.git
cd sample-quicksuite-chat-embedding
./setup.sh
```

After you have a secure Quick chat embed URL from your backend, copy `config.example.js` to `config.js` and set:

```javascript
window.QUICK_DEMO_CONFIG = {
  mode: "embed-url",
  appName: "AnyCompany Order Portal",
  quickEmbedUrl: "PASTE_GENERATED_QUICK_CHAT_EMBED_URL_HERE"
};
```

Then run the site again and click **Open AI Assistant**.

## Important note

Do not hard-code production embed URLs or credentials in a real application. Generate embed URLs from a secure backend with user authentication, domain restrictions, least-privilege IAM, and audit logging.
