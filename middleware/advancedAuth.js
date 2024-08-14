
import { auth } from 'express-oauth2-jwt-bearer'


const jwtCheck = auth({
    audience: 'https://book-store-api',
    issuerBaseURL: 'https://dev-162gige7erm3yp0f.us.auth0.com/',
    tokenSigningAlg: 'RS256'
});

export default jwtCheck;