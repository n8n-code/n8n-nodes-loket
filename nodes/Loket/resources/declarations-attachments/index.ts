import type { INodeProperties } from 'n8n-workflow';

export const declarationsAttachmentsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Declarations Attachments"
					]
				}
			},
			"options": [
				{
					"name": "Get Attachment By Declaration ID",
					"value": "Get Attachment By Declaration ID",
					"action": "Download attachment",
					"description": "__Activity name :__ GetAttachmentByDeclarationId\n\nDownload the attachment (via Qwoater) for the given declarationId. In case no attachment is know the service will return a 404.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/declarations/{{$parameter[\"declarationId\"]}}/attachment"
						}
					}
				},
				{
					"name": "Get Declarations With Attachment By Employer ID",
					"value": "Get Declarations With Attachment By Employer ID",
					"action": "Get a list of declarations with attachment",
					"description": "__Activity name :__ GetDeclarationsWithAttachmentByEmployerId\n\nGet a list of all declarationId's of declarations that have an attachment to it. \n\nThe attachment is stored in Qwoater, and thus on the background a call to Qwoater will be performed to check whether an attachment is available for a declaration.\n\nIf an attachment is available then a call may be performed to the other endpoint to actually start downloading the attachment for this declaration.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/employees/employments/declarations/withattachment"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/employers/employees/employments/declarations/{declarationId}/attachment",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Declarations Attachments"
					],
					"operation": [
						"Get Attachment By Declaration ID"
					]
				}
			}
		},
		{
			"displayName": "Declaration ID",
			"name": "declarationId",
			"required": true,
			"description": "The unique identifier of the declaration",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Declarations Attachments"
					],
					"operation": [
						"Get Attachment By Declaration ID"
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
						"Declarations Attachments"
					],
					"operation": [
						"Get Attachment By Declaration ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/{employerId}/employees/employments/declarations/withattachment",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Declarations Attachments"
					],
					"operation": [
						"Get Declarations With Attachment By Employer ID"
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
						"Declarations Attachments"
					],
					"operation": [
						"Get Declarations With Attachment By Employer ID"
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
						"Declarations Attachments"
					],
					"operation": [
						"Get Declarations With Attachment By Employer ID"
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
						"Declarations Attachments"
					],
					"operation": [
						"Get Declarations With Attachment By Employer ID"
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
						"Declarations Attachments"
					],
					"operation": [
						"Get Declarations With Attachment By Employer ID"
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
						"Declarations Attachments"
					],
					"operation": [
						"Get Declarations With Attachment By Employer ID"
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
						"Declarations Attachments"
					],
					"operation": [
						"Get Declarations With Attachment By Employer ID"
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
						"Declarations Attachments"
					],
					"operation": [
						"Get Declarations With Attachment By Employer ID"
					]
				}
			}
		},
];
