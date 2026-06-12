import type { INodeProperties } from 'n8n-workflow';

export const documentTemplateDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Document Template"
					]
				}
			},
			"options": [
				{
					"name": "Get Document Templates By Employer ID",
					"value": "Get Document Templates By Employer ID",
					"action": "Get a list of document templates",
					"description": "__Activity name :__ GetDocumentTemplatesByEmployerId\n\nGet a list of document templates within the employer dossier (werkgeverdossier). Via Qwoater. Note that the 'category' field contains the category of the template.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/documenttemplates"
						}
					}
				},
				{
					"name": "Post Document Template By Employer ID",
					"value": "Post Document Template By Employer ID",
					"action": "Upload a document template to the employer dossier",
					"description": "__Activity name :__ PostDocumentTemplateByEmployerId\n\n__Metadata:__ Possible options for fields of the type 'metadata' can be acquired(GET)by adding `/metadata` to the POST URL.\n\nUpload a document template within the employer dossier (werkgeverdossier). Via Qwoater.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/documenttemplates"
						}
					}
				},
				{
					"name": "Delete Document Template By Employer ID And Document ID",
					"value": "Delete Document Template By Employer ID And Document ID",
					"action": "Delete a document template in the employer dossier",
					"description": "__Activity name:__ DeleteDocumentTemplateByEmployerIdAndDocumentId\n\nDelete a document template in the employer dossier\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/documenttemplates/{{$parameter[\"documentId\"]}}"
						}
					}
				},
				{
					"name": "Get Document Template By Employer ID And Document ID",
					"value": "Get Document Template By Employer ID And Document ID",
					"action": "Download template document",
					"description": "__Activity name :__ GetDocumentTemplateByEmployerIdAndDocumentId\n\nDownload the document template of a given template entry. Via Qwoater.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/documenttemplates/{{$parameter[\"documentId\"]}}"
						}
					}
				},
				{
					"name": "Put Document Template By Employer ID And Document ID",
					"value": "Put Document Template By Employer ID And Document ID",
					"action": "Edit the details of an document template",
					"description": "__Activity name:__ PutDocumentTemplateByEmployerIdAndDocumentId\n\nEdit the details for a document template in the employer dossier\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/documenttemplates/{{$parameter[\"documentId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/employers/{employerId}/documenttemplates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Document Template"
					],
					"operation": [
						"Get Document Templates By Employer ID"
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
						"Document Template"
					],
					"operation": [
						"Get Document Templates By Employer ID"
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
						"Document Template"
					],
					"operation": [
						"Get Document Templates By Employer ID"
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
						"Document Template"
					],
					"operation": [
						"Get Document Templates By Employer ID"
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
						"Document Template"
					],
					"operation": [
						"Get Document Templates By Employer ID"
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
						"Document Template"
					],
					"operation": [
						"Get Document Templates By Employer ID"
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
						"Document Template"
					],
					"operation": [
						"Get Document Templates By Employer ID"
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
						"Document Template"
					],
					"operation": [
						"Get Document Templates By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/{employerId}/documenttemplates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Document Template"
					],
					"operation": [
						"Post Document Template By Employer ID"
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
						"Document Template"
					],
					"operation": [
						"Post Document Template By Employer ID"
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
						"Document Template"
					],
					"operation": [
						"Post Document Template By Employer ID"
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
						"Document Template"
					],
					"operation": [
						"Post Document Template By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "File",
			"name": "file",
			"type": "string",
			"default": "YQ==",
			"description": "base64 encoded document file.",
			"routing": {
				"send": {
					"property": "file",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Document Template"
					],
					"operation": [
						"Post Document Template By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /providers/employers/{employerId}/documenttemplates/{documentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Document Template"
					],
					"operation": [
						"Delete Document Template By Employer ID And Document ID"
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
						"Document Template"
					],
					"operation": [
						"Delete Document Template By Employer ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "The unique identifier of the document template",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Document Template"
					],
					"operation": [
						"Delete Document Template By Employer ID And Document ID"
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
						"Document Template"
					],
					"operation": [
						"Delete Document Template By Employer ID And Document ID"
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
						"Document Template"
					],
					"operation": [
						"Delete Document Template By Employer ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/{employerId}/documenttemplates/{documentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Document Template"
					],
					"operation": [
						"Get Document Template By Employer ID And Document ID"
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
						"Document Template"
					],
					"operation": [
						"Get Document Template By Employer ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "The unique identifier of the document template",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Document Template"
					],
					"operation": [
						"Get Document Template By Employer ID And Document ID"
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
						"Document Template"
					],
					"operation": [
						"Get Document Template By Employer ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/{employerId}/documenttemplates/{documentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Document Template"
					],
					"operation": [
						"Put Document Template By Employer ID And Document ID"
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
						"Document Template"
					],
					"operation": [
						"Put Document Template By Employer ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "The unique identifier of the document template",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Document Template"
					],
					"operation": [
						"Put Document Template By Employer ID And Document ID"
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
						"Document Template"
					],
					"operation": [
						"Put Document Template By Employer ID And Document ID"
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
						"Document Template"
					],
					"operation": [
						"Put Document Template By Employer ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "Attribute",
			"name": "attribute",
			"type": "string",
			"default": "VSP004",
			"description": "The attribute defined by the submitter. Qwoater: Docfield 32 Kenmerk\n",
			"routing": {
				"send": {
					"property": "attribute",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Document Template"
					],
					"operation": [
						"Put Document Template By Employer ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "Date Of Alert",
			"name": "dateOfAlert",
			"type": "string",
			"default": "2018-05-08",
			"description": "The time at which document will alerted for cancellation. Qwoater: AlertDate\n",
			"routing": {
				"send": {
					"property": "dateOfAlert",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Document Template"
					],
					"operation": [
						"Put Document Template By Employer ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "Copy of id card",
			"description": "The description defined by the submitter. Qwoater: Docfield 33 Omschrijving\n",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Document Template"
					],
					"operation": [
						"Put Document Template By Employer ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "Qwoater Document ID",
			"name": "qwoaterDocumentId",
			"type": "string",
			"default": "",
			"description": "Qwoater documentId",
			"routing": {
				"send": {
					"property": "qwoaterDocumentId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Document Template"
					],
					"operation": [
						"Put Document Template By Employer ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "Year",
			"name": "year",
			"type": "number",
			"default": 2017,
			"description": "The year the document relates to. Qwoater: Docfield 86 Jaar\n",
			"routing": {
				"send": {
					"property": "year",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Document Template"
					],
					"operation": [
						"Put Document Template By Employer ID And Document ID"
					]
				}
			}
		},
];
