// Goes at top of file
const stripe = require('stripe')('sk_test_51HD8PbKXuUXB2CzNTu5h9nUAP7u3tiN9AvStheZzSMtJmhHOQ9saq5IRdPv73E7GxplTRf1WftpORUD9siOcVbk600cbNS2mnw');


create: async ctx => {
  const {
    address,
    amount,
    brews,
    postalCode,
    token,
    city
  } = ctx.request.body;

  // Send charge to Stripe
  const charge = await stripe.charges.create({
    amount: amount * 100,
    currency: "usd",
    description: `Order ${new Date(Date.now())} - User ${ctx.state.user._id}`,
    source: token
  });

  // Create order in database
  const order = await strapi.services.orders.add({
    user: ctx.state.user._id,
    address,
    amount,
    brews,
    postalCode,
    city
  });

  return order;
}