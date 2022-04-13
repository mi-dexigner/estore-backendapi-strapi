module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4cd1ce087e77aa614f57bcc15dfb41fb'),
  },
});
