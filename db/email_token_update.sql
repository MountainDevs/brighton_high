UPDATE users
SET stripe_token = $1
WHERE email = $2;