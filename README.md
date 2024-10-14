# Portfolio template

This is a portfolio template for developers, designers, and other creatives. It is built with [React](https://reactjs.org/), [Next.js](https://nextjs.org/), and [Tailwind CSS](https://tailwindcss.com/).

## Local testing: (not mandatory)
Fork the repository and clone it to your local machine. Install the dependencies using npm, yarn, pnpm, or any other package manager you prefer.

```bash
npm install
# or
yarn
# or
pnpm install
# or
bun install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the template by modifying `src/app/lib/setup.ts`.


## Deployment:

You may deploy the app to any hosting provider that supports Node.js. Here are some examples:

- [Vercel](https://vercel.com/) (Recommended)
- [Netlify](https://www.netlify.com/)
- [Heroku](https://www.heroku.com/)
- [AWS](https://aws.amazon.com/)
- [Google Cloud](https://cloud.google.com/)
- [Azure](https://azure.microsoft.com/)
- [DigitalOcean](https://www.digitalocean.com/)
- [Render](https://render.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)
- Self-hosted

## Deployment instructions:

### 1. Fork the Repository
Go to the GitHub repository you want to fork.
Click the Fork button in the upper-right corner.
Select your GitHub account as the destination for the fork.

### 2. Edit the template to your needs
You need to edit `src/app/lib/setup.ts` with your information and any photos to `public/images/`.
You can do this directly on GitHub (online) or clone the repository and edit it locally.

### 3. Deploy the App
Choose one of the deployment options below to deploy the app to a hosting provider.
#### Deploying to Vercel (Recommended)
Go to [Vercel](https://vercel.com/).  
Sign in with your GitHub account.  
Click **New Project** and select the forked repository.  
Vercel will automatically detect that it's a Next.js app.  
Configure settings if necessary, and click **Deploy**.  
*Note: Vercel has native support for Next.js, so no additional setup is needed.*

#### Deploying to Netlify
Go to [Netlify](https://www.netlify.com/).  
Sign in and create a **New Site**.  
Connect your GitHub account and select the forked repository.  
In the build settings, set the following:  
- **Build Command:** `npm run build`  
- **Publish Directory:** `.next`  
Click **Deploy Site**.  
*Note: For dynamic routes or API routes, you'll need to enable Netlify Functions.*

#### Deploying to Heroku
Go to [Heroku](https://www.heroku.com/) and sign in.  
Create a **New App**.  
In the **Deploy** tab, choose GitHub as the deployment method.  
Connect your GitHub account and select the forked repository.  
Set the Buildpack to Node.js if not automatically detected.  
Set up the environment variables required by Next.js (like `NODE_ENV` or `NEXT_PUBLIC_*` variables).  
Click **Deploy Branch**.

#### Deploying to AWS (Amplify)
Go to [AWS Amplify Console](https://aws.amazon.com/amplify/).  
Click **Get Started** and select **Host your web app**.  
Connect your GitHub account and select the forked repository.  
Amplify will detect the Next.js app and configure build settings automatically.  
Click **Save and Deploy**.  
*Note: You can also deploy using S3 + CloudFront for static Next.js apps or use Lambda for serverless functions.*

#### Deploying to Google Cloud (App Engine)
Install the [Google Cloud SDK](https://cloud.google.com/sdk) on your machine.  
Initialize the SDK with `gcloud init`.  
In the project directory, create an `app.yaml` file with the following content:
```yaml
runtime: nodejs16
env: flex
```
Deploy the app using the following command:
```bash
gcloud app deploy
```
*Note: You can also use Firebase Hosting for static Next.js apps or Cloud Run for server-side rendering.*

#### Deploying to Azure (App Service)
For App Service (SSR):  
Go to [Azure Portal](https://portal.azure.com/).  
Create a **New Web App** and select Node.js as the runtime.  
In the **Deployment Center**, connect your GitHub repo.  
Set up the environment variables for Next.js and deploy.

#### Deploying to DigitalOcean (App Platform)
Go to [DigitalOcean](https://www.digitalocean.com/).  
In the App Platform, create a new app.  
Connect your GitHub repository.  
Set the build command to `npm run build` and the output directory to `.next`.  
Click **Deploy**.

#### Deploying to Render
Go to [Render](https://render.com/).  
Create a **New Web Service**.  
Connect your GitHub repository.  
Set the Start Command to `npm run start` and the Build Command to `npm run build`.  
Set the environment variables needed for your Next.js app.  
Click **Deploy**.

#### Deploying to Cloudflare Pages
Go to [Cloudflare Pages](https://pages.cloudflare.com/).  
Click **Create a project** and connect your GitHub repository.  
Set the build command to `npm run build` and the output directory to `.next`.  
Deploy the app.  
*Note: Cloudflare Pages is mainly for static sites. To add dynamic routes, you’ll need to use Cloudflare Workers.*

#### Other
You can also choose to self-host your application on your own server or choose any other hosting provider that supports Node.js.
