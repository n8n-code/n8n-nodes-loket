import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class LoketApi implements ICredentialType {
        name = 'N8nDevLoketApi';

        displayName = 'Loket API';

        icon: Icon = { light: 'file:../nodes/Loket/loket.png', dark: 'file:../nodes/Loket/loket.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://api.loket.nl/v2',
                        required: true,
                        placeholder: 'https://api.loket.nl/v2',
                        description: 'The base URL of your Loket API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
