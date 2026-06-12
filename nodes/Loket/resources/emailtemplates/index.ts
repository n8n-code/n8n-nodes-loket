import type { INodeProperties } from 'n8n-workflow';

export const emailtemplatesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Emailtemplates"
					]
				}
			},
			"options": [
				{
					"name": "Get Email Templates By Provider ID",
					"value": "Get Email Templates By Provider ID",
					"action": "List email templates for an provider",
					"description": "__Activity name :__ GetEmailTemplatesByProviderId\n\nGet a list of the email templates for an provider.\n\n__Note:__ Email templates can be defined on employer, provider and loket level. This endpoint returns for each emailtype the email template which is currently in use for the provider.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/{{$parameter[\"providerId\"]}}/emailtemplates"
						}
					}
				},
				{
					"name": "Get Email Template By Provider ID And Email Template ID",
					"value": "Get Email Template By Provider ID And Email Template ID",
					"action": "Details of an email template",
					"description": "__Activity name :__ GetEmailTemplateByProviderIdAndEmailTemplateId\n\nGet the details of an email template. The available email template placeholders can be aquired by adding /metadata to the url.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/{{$parameter[\"providerId\"]}}/emailtemplates/{{$parameter[\"emailTemplateId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/{providerId}/emailtemplates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Emailtemplates"
					],
					"operation": [
						"Get Email Templates By Provider ID"
					]
				}
			}
		},
		{
			"displayName": "Provider ID",
			"name": "providerId",
			"required": true,
			"description": "The unique identifier of a provider",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Emailtemplates"
					],
					"operation": [
						"Get Email Templates By Provider ID"
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
						"Emailtemplates"
					],
					"operation": [
						"Get Email Templates By Provider ID"
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
						"Emailtemplates"
					],
					"operation": [
						"Get Email Templates By Provider ID"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"description": "Filter the collection",
			"default": "cancellationPeriodTimeUnit.key eq 4",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Emailtemplates"
					],
					"operation": [
						"Get Email Templates By Provider ID"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"description": "Order the collection on one or more fields",
			"default": "-companyName,address.houseNumber",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "orderBy",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Emailtemplates"
					],
					"operation": [
						"Get Email Templates By Provider ID"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Specifies which page should be returned",
			"default": 2,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pageNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Emailtemplates"
					],
					"operation": [
						"Get Email Templates By Provider ID"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "pageSize",
			"description": "Specifies the number of objects per page",
			"default": 20,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pageSize",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Emailtemplates"
					],
					"operation": [
						"Get Email Templates By Provider ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/{providerId}/emailtemplates/{emailTemplateId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Emailtemplates"
					],
					"operation": [
						"Get Email Template By Provider ID And Email Template ID"
					]
				}
			}
		},
		{
			"displayName": "Provider ID",
			"name": "providerId",
			"required": true,
			"description": "The unique identifier of a provider",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Emailtemplates"
					],
					"operation": [
						"Get Email Template By Provider ID And Email Template ID"
					]
				}
			}
		},
		{
			"displayName": "Emailtemplate ID",
			"name": "emailtemplateId",
			"required": true,
			"description": "The unique identifier of the record",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "emailtemplateId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Emailtemplates"
					],
					"operation": [
						"Get Email Template By Provider ID And Email Template ID"
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
						"Emailtemplates"
					],
					"operation": [
						"Get Email Template By Provider ID And Email Template ID"
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
						"Emailtemplates"
					],
					"operation": [
						"Get Email Template By Provider ID And Email Template ID"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"description": "Filter the collection",
			"default": "cancellationPeriodTimeUnit.key eq 4",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Emailtemplates"
					],
					"operation": [
						"Get Email Template By Provider ID And Email Template ID"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"description": "Order the collection on one or more fields",
			"default": "-companyName,address.houseNumber",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "orderBy",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Emailtemplates"
					],
					"operation": [
						"Get Email Template By Provider ID And Email Template ID"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Specifies which page should be returned",
			"default": 2,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pageNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Emailtemplates"
					],
					"operation": [
						"Get Email Template By Provider ID And Email Template ID"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "pageSize",
			"description": "Specifies the number of objects per page",
			"default": 20,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pageSize",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Emailtemplates"
					],
					"operation": [
						"Get Email Template By Provider ID And Email Template ID"
					]
				}
			}
		},
		{
			"displayName": "Email Template ID",
			"name": "emailTemplateId",
			"required": true,
			"description": "Automatically added",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Emailtemplates"
					],
					"operation": [
						"Get Email Template By Provider ID And Email Template ID"
					]
				}
			}
		},
];
