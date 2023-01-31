import batchRoutes from './batch/routes.js'
import profileRoute from './profile/route.js'
import distributorRoutes from './distributor/routes.js'
import contractorRoutes from './contractor/routes.js'
import dashboardRoutes from './profile/Dashboard.js'
import siteRoutes from './site/routes.js';

export default [
    ...batchRoutes,
    ...profileRoute,
    ...distributorRoutes,
    ...contractorRoutes,
    ...dashboardRoutes,
    ...siteRoutes,
]