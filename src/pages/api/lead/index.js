import pipedrive from 'pipedrive';

pipedrive.Configuration.apiToken = process.env.PIPEDRIVE_API_TOKEN

export default async function handler(req, res) {
    const httpMethod = req.method

    switch (httpMethod) {
        case 'GET':
            const leads = await pipedrive.PersonsController.getAllPersons({}, (error, response, context) => {
                if (error) {
                    res.status(500).json({ message: 'Error', error });
                }
            });
            res.status(200).json(leads);
            break;
        case 'POST':
            const { name, email } = req.body;
            const input = {
                body: { name, email }
            };

            const lead = await pipedrive.PersonsController.addAPerson(input, (error, response, context) => {
                if (error) {
                res.send(error);
                }
            });

            res.send(lead);
            break;    
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status.end(`Method ${httpMethod} not allowed`)
    }
    
}
