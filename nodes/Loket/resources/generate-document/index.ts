import type { INodeProperties } from 'n8n-workflow';

export const generateDocumentDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Generate Document"
					]
				}
			},
			"options": [
				{
					"name": "Post Generate Document By Concept Employee ID And Document ID",
					"value": "Post Generate Document By Concept Employee ID And Document ID",
					"action": "Generate a document for an concept employee",
					"description": "__Activity name :__ PostGenerateDocumentByConceptEmployeeIdAndDocumentId\n\n__Metadata:__ Available templates can be acquired(GET) at Employer level(/v2/providers/employers/{conceptEmployeeId}/documenttemplates/generatedocument/metadata).\n\nGenerate a document for an concept employee and store it in the employment dossier.  Via Qwoater.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/conceptemployees/{{$parameter[\"conceptEmployeeId\"]}}/documenttemplates/{{$parameter[\"documentId\"]}}/generatedocument"
						}
					}
				},
				{
					"name": "Post Generate Document Preview By Concept Employee ID And Document ID",
					"value": "Post Generate Document Preview By Concept Employee ID And Document ID",
					"action": "Generate a document for an concept employee - preview",
					"description": "__Activity name :__ PostGenerateDocumentPreviewByConceptEmployeeIdAndDocumentId\n\n__Metadata:__ Available templates can be acquired(GET) at Employer level(/v2/providers/employers/{employerId}/documenttemplates/generatedocument/metadata).\n\nGenerate a document for an concept employee and receive a preview. Via Qwoater.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/conceptemployees/{{$parameter[\"conceptEmployeeId\"]}}/documenttemplates/{{$parameter[\"documentId\"]}}/generatedocument/preview"
						}
					}
				},
				{
					"name": "Post Generate Document By Employment ID And Document ID",
					"value": "Post Generate Document By Employment ID And Document ID",
					"action": "Generate a document for an employment",
					"description": "__Activity name :__ PostGenerateDocumentByEmploymentIdAndDocumentId\n\n__Metadata:__ Available templates can be acquired(GET) at Employer level(/v2/providers/employers/{employerId}/documenttemplates/generatedocument/metadata).\n\nGenerate a document for an employment and store it in the employment dossier. Via Qwoater.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/documenttemplates/{{$parameter[\"documentId\"]}}/generatedocument"
						}
					}
				},
				{
					"name": "Post Generate Document Preview By Employment ID And Document ID",
					"value": "Post Generate Document Preview By Employment ID And Document ID",
					"action": "Generate a document for an employment - preview",
					"description": "__Activity name :__ PostGenerateDocumentPreviewByEmploymentIdAndDocumentId\n\n__Metadata:__ Available templates can be acquired(GET) at Employer level(/v2/providers/employers/{employerId}/documenttemplates/generatedocument/metadata).\n\nGenerate a document for an employment and receive a preview. Via Qwoater.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/documenttemplates/{{$parameter[\"documentId\"]}}/generatedocument/preview"
						}
					}
				},
				{
					"name": "Post Generate Documents By Employer ID And Document ID",
					"value": "Post Generate Documents By Employer ID And Document ID",
					"action": "Generate documents for selected employments",
					"description": "__Activity name :__ PostGenerateDocumentsByEmployerIdAndDocumentId\n\n__Metadata:__ Available templates can be acquired(GET) at Employer level(/v2/providers/employers/{employerId}/documenttemplates/generatedocument/metadata).\n\nGenerate documents for a selection of employments and store it in the employment dossier. Via Qwoater. (One document is generated and stored for each selected employment)\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/documenttemplates/{{$parameter[\"documentId\"]}}/generatedocuments"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /providers/employers/conceptemployees/{conceptEmployeeId}/documenttemplates/{documentId}/generatedocument",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Generate Document"
					],
					"operation": [
						"Post Generate Document By Concept Employee ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "Concept Employee ID",
			"name": "conceptEmployeeId",
			"required": true,
			"description": "The unique identifier of the concept employee",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Generate Document"
					],
					"operation": [
						"Post Generate Document By Concept Employee ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "The unique identifier of the template",
			"default": "P123456789",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Generate Document"
					],
					"operation": [
						"Post Generate Document By Concept Employee ID And Document ID"
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
						"Generate Document"
					],
					"operation": [
						"Post Generate Document By Concept Employee ID And Document ID"
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
						"Generate Document"
					],
					"operation": [
						"Post Generate Document By Concept Employee ID And Document ID"
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
						"Generate Document"
					],
					"operation": [
						"Post Generate Document By Concept Employee ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "Date Of Alert",
			"name": "dateOfAlert",
			"type": "string",
			"default": "2018-05-08",
			"description": "The date at which document will alerted for cancellation. Qwoater: AlertDate\n",
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
						"Generate Document"
					],
					"operation": [
						"Post Generate Document By Concept Employee ID And Document ID"
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
						"Generate Document"
					],
					"operation": [
						"Post Generate Document By Concept Employee ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "Filename",
			"name": "filename",
			"type": "string",
			"default": "BowlsJohn.pdf",
			"description": "The name of the file. Qwoater: Filename\n",
			"routing": {
				"send": {
					"property": "filename",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Generate Document"
					],
					"operation": [
						"Post Generate Document By Concept Employee ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "Reference Date",
			"name": "referenceDate",
			"type": "string",
			"default": "2020-05-08",
			"description": "This date will be used to select date depending data such as department and function.\n",
			"routing": {
				"send": {
					"property": "referenceDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Generate Document"
					],
					"operation": [
						"Post Generate Document By Concept Employee ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "Template Employer ID",
			"name": "templateEmployerId",
			"type": "string",
			"default": "b14acd0d-75d7-4fc8-8b22-4a3924585cab",
			"description": "The unique identifier of the employer to which the template belongs (GUID/UUID).",
			"routing": {
				"send": {
					"property": "templateEmployerId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Generate Document"
					],
					"operation": [
						"Post Generate Document By Concept Employee ID And Document ID"
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
						"Generate Document"
					],
					"operation": [
						"Post Generate Document By Concept Employee ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/conceptemployees/{conceptEmployeeId}/documenttemplates/{documentId}/generatedocument/preview",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Generate Document"
					],
					"operation": [
						"Post Generate Document Preview By Concept Employee ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "Concept Employee ID",
			"name": "conceptEmployeeId",
			"required": true,
			"description": "The unique identifier of the concept employee",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Generate Document"
					],
					"operation": [
						"Post Generate Document Preview By Concept Employee ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "The unique identifier of the template",
			"default": "P123456789",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Generate Document"
					],
					"operation": [
						"Post Generate Document Preview By Concept Employee ID And Document ID"
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
						"Generate Document"
					],
					"operation": [
						"Post Generate Document Preview By Concept Employee ID And Document ID"
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
						"Generate Document"
					],
					"operation": [
						"Post Generate Document Preview By Concept Employee ID And Document ID"
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
						"Generate Document"
					],
					"operation": [
						"Post Generate Document Preview By Concept Employee ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "Date Of Alert",
			"name": "dateOfAlert",
			"type": "string",
			"default": "2018-05-08",
			"description": "The date at which document will alerted for cancellation. Qwoater: AlertDate\n",
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
						"Generate Document"
					],
					"operation": [
						"Post Generate Document Preview By Concept Employee ID And Document ID"
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
						"Generate Document"
					],
					"operation": [
						"Post Generate Document Preview By Concept Employee ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "Filename",
			"name": "filename",
			"type": "string",
			"default": "BowlsJohn.pdf",
			"description": "The name of the file. Qwoater: Filename\n",
			"routing": {
				"send": {
					"property": "filename",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Generate Document"
					],
					"operation": [
						"Post Generate Document Preview By Concept Employee ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "Reference Date",
			"name": "referenceDate",
			"type": "string",
			"default": "2020-05-08",
			"description": "This date will be used to select date depending data such as department and function.\n",
			"routing": {
				"send": {
					"property": "referenceDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Generate Document"
					],
					"operation": [
						"Post Generate Document Preview By Concept Employee ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "Template Employer ID",
			"name": "templateEmployerId",
			"type": "string",
			"default": "b14acd0d-75d7-4fc8-8b22-4a3924585cab",
			"description": "The unique identifier of the employer to which the template belongs (GUID/UUID).",
			"routing": {
				"send": {
					"property": "templateEmployerId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Generate Document"
					],
					"operation": [
						"Post Generate Document Preview By Concept Employee ID And Document ID"
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
						"Generate Document"
					],
					"operation": [
						"Post Generate Document Preview By Concept Employee ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/employees/employments/{employmentId}/documenttemplates/{documentId}/generatedocument",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Generate Document"
					],
					"operation": [
						"Post Generate Document By Employment ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "Employment ID",
			"name": "employmentId",
			"required": true,
			"description": "The unique identifier of the employment",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Generate Document"
					],
					"operation": [
						"Post Generate Document By Employment ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "The unique identifier of the template",
			"default": "P123456789",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Generate Document"
					],
					"operation": [
						"Post Generate Document By Employment ID And Document ID"
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
						"Generate Document"
					],
					"operation": [
						"Post Generate Document By Employment ID And Document ID"
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
						"Generate Document"
					],
					"operation": [
						"Post Generate Document By Employment ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "Send Email Notification",
			"name": "sendEmailNotification",
			"type": "boolean",
			"default": true,
			"description": "Indicate whether to send an email to the employee.",
			"routing": {
				"send": {
					"property": "sendEmailNotification",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Generate Document"
					],
					"operation": [
						"Post Generate Document By Employment ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/employees/employments/{employmentId}/documenttemplates/{documentId}/generatedocument/preview",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Generate Document"
					],
					"operation": [
						"Post Generate Document Preview By Employment ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "Employment ID",
			"name": "employmentId",
			"required": true,
			"description": "The unique identifier of the employment",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Generate Document"
					],
					"operation": [
						"Post Generate Document Preview By Employment ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "The unique identifier of the template",
			"default": "P123456789",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Generate Document"
					],
					"operation": [
						"Post Generate Document Preview By Employment ID And Document ID"
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
						"Generate Document"
					],
					"operation": [
						"Post Generate Document Preview By Employment ID And Document ID"
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
						"Generate Document"
					],
					"operation": [
						"Post Generate Document Preview By Employment ID And Document ID"
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
						"Generate Document"
					],
					"operation": [
						"Post Generate Document Preview By Employment ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "Date Of Alert",
			"name": "dateOfAlert",
			"type": "string",
			"default": "2018-05-08",
			"description": "The date at which document will alerted for cancellation. Qwoater: AlertDate\n",
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
						"Generate Document"
					],
					"operation": [
						"Post Generate Document Preview By Employment ID And Document ID"
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
						"Generate Document"
					],
					"operation": [
						"Post Generate Document Preview By Employment ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "Filename",
			"name": "filename",
			"type": "string",
			"default": "BowlsJohn.pdf",
			"description": "The name of the file. Qwoater: Filename\n",
			"routing": {
				"send": {
					"property": "filename",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Generate Document"
					],
					"operation": [
						"Post Generate Document Preview By Employment ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "Reference Date",
			"name": "referenceDate",
			"type": "string",
			"default": "2020-05-08",
			"description": "This date will be used to select date depending data such as department and function.\n",
			"routing": {
				"send": {
					"property": "referenceDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Generate Document"
					],
					"operation": [
						"Post Generate Document Preview By Employment ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "Template Employer ID",
			"name": "templateEmployerId",
			"type": "string",
			"default": "b14acd0d-75d7-4fc8-8b22-4a3924585cab",
			"description": "The unique identifier of the employer to which the template belongs (GUID/UUID).",
			"routing": {
				"send": {
					"property": "templateEmployerId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Generate Document"
					],
					"operation": [
						"Post Generate Document Preview By Employment ID And Document ID"
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
						"Generate Document"
					],
					"operation": [
						"Post Generate Document Preview By Employment ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/{employerId}/documenttemplates/{documentId}/generatedocuments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Generate Document"
					],
					"operation": [
						"Post Generate Documents By Employer ID And Document ID"
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
						"Generate Document"
					],
					"operation": [
						"Post Generate Documents By Employer ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "The unique identifier of the template",
			"default": "P123456789",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Generate Document"
					],
					"operation": [
						"Post Generate Documents By Employer ID And Document ID"
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
						"Generate Document"
					],
					"operation": [
						"Post Generate Documents By Employer ID And Document ID"
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
						"Generate Document"
					],
					"operation": [
						"Post Generate Documents By Employer ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "Employment Ids",
			"name": "employmentIds",
			"type": "json",
			"default": "[\n  \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\"\n]",
			"routing": {
				"send": {
					"property": "employmentIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Generate Document"
					],
					"operation": [
						"Post Generate Documents By Employer ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "Send Email Notification",
			"name": "sendEmailNotification",
			"type": "boolean",
			"default": true,
			"description": "Indicate whether to send an email to the employees.",
			"routing": {
				"send": {
					"property": "sendEmailNotification",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Generate Document"
					],
					"operation": [
						"Post Generate Documents By Employer ID And Document ID"
					]
				}
			}
		},
];
