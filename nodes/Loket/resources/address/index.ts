import type { INodeProperties } from 'n8n-workflow';

export const addressDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Address"
					]
				}
			},
			"options": [
				{
					"name": "Get Address By Postal Code And House Number",
					"value": "Get Address By Postal Code And House Number",
					"action": "Acquire the address for a combination of `postalCode` and `houseNumber`",
					"description": "__Activity name :__  GetAddressyByPostalCodeAndHouseNumber <br/> Acquire the address for a combination of `postalCode` and `houseNumber`.  Only Dutch addresses are supported. Both the postalCode and houseNumber have to be specified as query parameters to perform a succesful call to this endpoint. The city and street name returned by this endpoint are according to the nen standard     <br/>\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/locationservices/address"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /locationservices/address",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Address"
					],
					"operation": [
						"Get Address By Postal Code And House Number"
					]
				}
			}
		},
		{
			"displayName": "Authorization",
			"name": "Authorization",
			"required": true,
			"description": "A valid Bearer token for authorizing the request.",
			"default": "Bearer <TOKEN>",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Address"
					],
					"operation": [
						"Get Address By Postal Code And House Number"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "The accept header is used to influence what type of output is returned and in most cases the version of the output",
			"default": "application/json;version=2018-01-01",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Address"
					],
					"operation": [
						"Get Address By Postal Code And House Number"
					]
				}
			}
		},
		{
			"displayName": "Postal Code",
			"name": "postalCode",
			"required": true,
			"description": "A valid postal code",
			"default": "5037AA",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "postalCode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Address"
					],
					"operation": [
						"Get Address By Postal Code And House Number"
					]
				}
			}
		},
		{
			"displayName": "House Number",
			"name": "houseNumber",
			"required": true,
			"description": "A valid house number (without addition)",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "houseNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Address"
					],
					"operation": [
						"Get Address By Postal Code And House Number"
					]
				}
			}
		},
];
