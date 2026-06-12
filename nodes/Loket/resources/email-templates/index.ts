import type { INodeProperties } from 'n8n-workflow';

export const emailTemplatesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Email Templates"
					]
				}
			},
			"options": [
				{
					"name": "Get Email Templates By Employer ID",
					"value": "Get Email Templates By Employer ID",
					"action": "List email templates for an employer",
					"description": "__Activity name :__ GetEmailTemplatesByEmployerId\n\nGet a list of the email templates for an employer.\n\n__Note:__ Email templates can be defined on employer, provider and loket level. This endpoint returns for each emailtype the email template which is currently in use for the employer.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/emailtemplates"
						}
					}
				},
				{
					"name": "Delete Email Template By Employer ID And Email Template ID",
					"value": "Delete Email Template By Employer ID And Email Template ID",
					"action": "Delete an email template record",
					"description": "__Activity name :__ DeleteEmailTemplateByEmployerIdAndEmailTemplateId\n\nDelete an existing email template record\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/emailtemplates/{{$parameter[\"emailTemplateId\"]}}"
						}
					}
				},
				{
					"name": "Get Email Template By Employer ID And Email Template ID",
					"value": "Get Email Template By Employer ID And Email Template ID",
					"action": "Details of an email template",
					"description": "__Activity name :__ GetEmailTemplateByEmployerIdAndEmailTemplateId\n\nGet the details of an email template. The available email template placeholders can be aquired by adding /metadata to the url.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/emailtemplates/{{$parameter[\"emailTemplateId\"]}}"
						}
					}
				},
				{
					"name": "Put Email Template By Employer ID And Email Template ID",
					"value": "Put Email Template By Employer ID And Email Template ID",
					"action": "Edit an email template record",
					"description": "__Activity name :__ PutEmailTemplateByEmployerIdAndEmailTemplateId\n\nEdit the email template. The subject, body and senderEmail can be editted. \n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/emailtemplates/{{$parameter[\"emailTemplateId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/employers/{employerId}/emailtemplates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Email Templates"
					],
					"operation": [
						"Get Email Templates By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Employer ID",
			"name": "employerId",
			"required": true,
			"description": "The unique identifier of the employer",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Email Templates"
					],
					"operation": [
						"Get Email Templates By Employer ID"
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
						"Email Templates"
					],
					"operation": [
						"Get Email Templates By Employer ID"
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
						"Email Templates"
					],
					"operation": [
						"Get Email Templates By Employer ID"
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
						"Email Templates"
					],
					"operation": [
						"Get Email Templates By Employer ID"
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
						"Email Templates"
					],
					"operation": [
						"Get Email Templates By Employer ID"
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
						"Email Templates"
					],
					"operation": [
						"Get Email Templates By Employer ID"
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
						"Email Templates"
					],
					"operation": [
						"Get Email Templates By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /providers/employers/{employerId}/emailtemplates/{emailTemplateId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Email Templates"
					],
					"operation": [
						"Delete Email Template By Employer ID And Email Template ID"
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
						"Email Templates"
					],
					"operation": [
						"Delete Email Template By Employer ID And Email Template ID"
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
						"Email Templates"
					],
					"operation": [
						"Delete Email Template By Employer ID And Email Template ID"
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
						"Email Templates"
					],
					"operation": [
						"Delete Email Template By Employer ID And Email Template ID"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "Input the value acquired in the ETag header for concurrency control. Please note this is optional (and not recommended for most types of integrations).",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Email Templates"
					],
					"operation": [
						"Delete Email Template By Employer ID And Email Template ID"
					]
				}
			}
		},
		{
			"displayName": "Employer ID",
			"name": "employerId",
			"required": true,
			"description": "Automatically added",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Email Templates"
					],
					"operation": [
						"Delete Email Template By Employer ID And Email Template ID"
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
						"Email Templates"
					],
					"operation": [
						"Delete Email Template By Employer ID And Email Template ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/{employerId}/emailtemplates/{emailTemplateId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Email Templates"
					],
					"operation": [
						"Get Email Template By Employer ID And Email Template ID"
					]
				}
			}
		},
		{
			"displayName": "Employer ID",
			"name": "employerId",
			"required": true,
			"description": "The unique identifier of the employer",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Email Templates"
					],
					"operation": [
						"Get Email Template By Employer ID And Email Template ID"
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
						"Email Templates"
					],
					"operation": [
						"Get Email Template By Employer ID And Email Template ID"
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
						"Email Templates"
					],
					"operation": [
						"Get Email Template By Employer ID And Email Template ID"
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
						"Email Templates"
					],
					"operation": [
						"Get Email Template By Employer ID And Email Template ID"
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
						"Email Templates"
					],
					"operation": [
						"Get Email Template By Employer ID And Email Template ID"
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
						"Email Templates"
					],
					"operation": [
						"Get Email Template By Employer ID And Email Template ID"
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
						"Email Templates"
					],
					"operation": [
						"Get Email Template By Employer ID And Email Template ID"
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
						"Email Templates"
					],
					"operation": [
						"Get Email Template By Employer ID And Email Template ID"
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
						"Email Templates"
					],
					"operation": [
						"Get Email Template By Employer ID And Email Template ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/{employerId}/emailtemplates/{emailTemplateId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Email Templates"
					],
					"operation": [
						"Put Email Template By Employer ID And Email Template ID"
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
						"Email Templates"
					],
					"operation": [
						"Put Email Template By Employer ID And Email Template ID"
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
						"Email Templates"
					],
					"operation": [
						"Put Email Template By Employer ID And Email Template ID"
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
						"Email Templates"
					],
					"operation": [
						"Put Email Template By Employer ID And Email Template ID"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "Input the value acquired in the ETag header for concurrency control. Please note this is optional (and not recommended for most types of integrations).",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Email Templates"
					],
					"operation": [
						"Put Email Template By Employer ID And Email Template ID"
					]
				}
			}
		},
		{
			"displayName": "Employer ID",
			"name": "employerId",
			"required": true,
			"description": "Automatically added",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Email Templates"
					],
					"operation": [
						"Put Email Template By Employer ID And Email Template ID"
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
						"Email Templates"
					],
					"operation": [
						"Put Email Template By Employer ID And Email Template ID"
					]
				}
			}
		},
		{
			"displayName": "Category",
			"name": "category",
			"type": "json",
			"default": "{\n  \"key\": 3,\n  \"value\": \"Verlof\"\n}",
			"description": "The module to which the email template belongs",
			"routing": {
				"send": {
					"property": "category",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Email Templates"
					],
					"operation": [
						"Put Email Template By Employer ID And Email Template ID"
					]
				}
			}
		},
		{
			"displayName": "Defined At Level",
			"name": "definedAtLevel",
			"type": "options",
			"default": "employer",
			"description": "The level at which the email template is defined.",
			"options": [
				{
					"name": "Employer",
					"value": "employer"
				},
				{
					"name": "Provider",
					"value": "provider"
				},
				{
					"name": "Loket",
					"value": "loket"
				}
			],
			"routing": {
				"send": {
					"property": "definedAtLevel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Email Templates"
					],
					"operation": [
						"Put Email Template By Employer ID And Email Template ID"
					]
				}
			}
		},
		{
			"displayName": "Depends On Module",
			"name": "dependsOnModule",
			"type": "json",
			"default": "{\n  \"description\": \"Verlof\",\n  \"id\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\"\n}",
			"description": "The module to which the email template belongs",
			"routing": {
				"send": {
					"property": "dependsOnModule",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Email Templates"
					],
					"operation": [
						"Put Email Template By Employer ID And Email Template ID"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"type": "json",
			"default": "{\n  \"body\": \"Je verlofaanvraag is behandeld.\",\n  \"senderEmail\": \"noreply@loket.nl\",\n  \"subject\": \"Verlofaanvraag behandeld\"\n}",
			"description": "The configurable parts of the email template",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Email Templates"
					],
					"operation": [
						"Put Email Template By Employer ID And Email Template ID"
					]
				}
			}
		},
		{
			"displayName": "Is Email Template Editable",
			"name": "isEmailTemplateEditable",
			"type": "boolean",
			"default": true,
			"description": "Indicates whether the email template can be editted.",
			"routing": {
				"send": {
					"property": "isEmailTemplateEditable",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Email Templates"
					],
					"operation": [
						"Put Email Template By Employer ID And Email Template ID"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "json",
			"default": "{\n  \"description\": \"Verlofaanvraag behandeld (voor de indiener)\",\n  \"id\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\",\n  \"sortOrder\": 210\n}",
			"description": "The type of the email template",
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Email Templates"
					],
					"operation": [
						"Put Email Template By Employer ID And Email Template ID"
					]
				}
			}
		},
];
