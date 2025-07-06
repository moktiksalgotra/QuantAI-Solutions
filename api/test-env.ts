export default function handler(req: any, res: any) {
  const APP_USERNAME = process.env.APP_USERNAME;
  const APP_PASSWORD = process.env.APP_PASSWORD;
  const JWT_SECRET = process.env.JWT_SECRET;

  res.status(200).json({
    message: 'Environment variables check',
    hasUsername: !!APP_USERNAME,
    hasPassword: !!APP_PASSWORD,
    hasSecret: !!JWT_SECRET,
    allSet: !!(APP_USERNAME && APP_PASSWORD && JWT_SECRET)
  });
} 