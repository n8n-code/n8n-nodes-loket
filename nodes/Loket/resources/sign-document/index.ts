import type { INodeProperties } from 'n8n-workflow';

export const signDocumentDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Sign Document"
					]
				}
			},
			"options": [
				{
					"name": "Delete Signature By Concept Employee ID And Document ID",
					"value": "Delete Signature By Concept Employee ID And Document ID",
					"action": "Delete signature - Conceptemployee",
					"description": "__Activity name :__ DeleteSignatureByConceptEmployeeIdAndDocumentId\n\n__Metadata:__ No metadata available.\n\nDelete the proces to sign a document for an Conceptemployee.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/conceptemployees/{{$parameter[\"conceptEmployeeId\"]}}/documents/{{$parameter[\"documentId\"]}}/signature"
						}
					}
				},
				{
					"name": "Get Signature By Concept Employee ID And Document ID",
					"value": "Get Signature By Concept Employee ID And Document ID",
					"action": "Signature details - Conceptemployee",
					"description": "__Activity name :__ GetSignatureByConceptEmployeeIdAndDocumentId\n\n__Metadata:__ No metadata available.\n\nRetrieve the status of the signing.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/conceptemployees/{{$parameter[\"conceptEmployeeId\"]}}/documents/{{$parameter[\"documentId\"]}}/signature"
						}
					}
				},
				{
					"name": "Post Initiate Signature By Concept Employee ID And Document ID",
					"value": "Post Initiate Signature By Concept Employee ID And Document ID",
					"action": "Initiate signature - Conceptemployee",
					"description": "__Activity name :__ PostInitiateSignatureByConceptEmployeeIdAndDocumentId\n\n__Metadata:__ No metadata available. Defaults are available by adding /defaults to the path.\n\nInitiate the proces to sign a document for an employment by one or more signers.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/conceptemployees/{{$parameter[\"conceptEmployeeId\"]}}/documents/{{$parameter[\"documentId\"]}}/signature/initiate"
						}
					}
				},
				{
					"name": "Get Signature Report By Concept Employee ID And Document ID",
					"value": "Get Signature Report By Concept Employee ID And Document ID",
					"action": "Retrieve the report of the signing - Conceptemployee",
					"description": "__Activity name :__ GetSignatureReportByConceptEmployeeIdAndDocumentId\n\n__Metadata:__ No metadata available.\n\nReport of the signature.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/conceptemployees/{{$parameter[\"conceptEmployeeId\"]}}/documents/{{$parameter[\"documentId\"]}}/signature/report"
						}
					}
				},
				{
					"name": "Delete Signature By Employment ID And Document ID",
					"value": "Delete Signature By Employment ID And Document ID",
					"action": "Delete signature - Employment",
					"description": "__Activity name :__ DeleteSignatureByEmploymentIdAndDocumentId\n\n__Metadata:__ No metadata available.\n\nDelete the proces to sign a document for an employment.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/documents/{{$parameter[\"documentId\"]}}/signature"
						}
					}
				},
				{
					"name": "Get Signature By Employment ID And Document ID",
					"value": "Get Signature By Employment ID And Document ID",
					"action": "Signature details - Employment",
					"description": "__Activity name :__ GetSignatureByEmploymentIdAndDocumentId\n\n__Metadata:__ No metadata available.\n\nRetrieve the status of the signing.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/documents/{{$parameter[\"documentId\"]}}/signature"
						}
					}
				},
				{
					"name": "Post Initiate Signature By Employment ID And Document ID",
					"value": "Post Initiate Signature By Employment ID And Document ID",
					"action": "Initiate signature - Employment",
					"description": "__Activity name :__ PostInitiateSignatureByEmploymentIdAndDocumentId\n\n__Metadata:__ No metadata available. Defaults are available by adding /defaults to the path.\n\nInitiate the proces to sign a document for an employment by one or more signers.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/documents/{{$parameter[\"documentId\"]}}/signature/initiate"
						}
					}
				},
				{
					"name": "Get Signature Report By Employment ID And Document ID",
					"value": "Get Signature Report By Employment ID And Document ID",
					"action": "Retrieve the report of the signing - Employment",
					"description": "__Activity name :__ GetSignatureReportByEmploymentIdAndDocumentId\n\n__Metadata:__ No metadata available.\n\nReport of the signature.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/documents/{{$parameter[\"documentId\"]}}/signature/report"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /providers/employers/conceptemployees/{conceptEmployeeId}/documents/{documentId}/signature",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sign Document"
					],
					"operation": [
						"Delete Signature By Concept Employee ID And Document ID"
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
						"Sign Document"
					],
					"operation": [
						"Delete Signature By Concept Employee ID And Document ID"
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
						"Sign Document"
					],
					"operation": [
						"Delete Signature By Concept Employee ID And Document ID"
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
						"Sign Document"
					],
					"operation": [
						"Delete Signature By Concept Employee ID And Document ID"
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
						"Sign Document"
					],
					"operation": [
						"Delete Signature By Concept Employee ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/conceptemployees/{conceptEmployeeId}/documents/{documentId}/signature",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sign Document"
					],
					"operation": [
						"Get Signature By Concept Employee ID And Document ID"
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
						"Sign Document"
					],
					"operation": [
						"Get Signature By Concept Employee ID And Document ID"
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
						"Sign Document"
					],
					"operation": [
						"Get Signature By Concept Employee ID And Document ID"
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
						"Sign Document"
					],
					"operation": [
						"Get Signature By Concept Employee ID And Document ID"
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
						"Sign Document"
					],
					"operation": [
						"Get Signature By Concept Employee ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/conceptemployees/{conceptEmployeeId}/documents/{documentId}/signature/initiate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sign Document"
					],
					"operation": [
						"Post Initiate Signature By Concept Employee ID And Document ID"
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
						"Sign Document"
					],
					"operation": [
						"Post Initiate Signature By Concept Employee ID And Document ID"
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
						"Sign Document"
					],
					"operation": [
						"Post Initiate Signature By Concept Employee ID And Document ID"
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
						"Sign Document"
					],
					"operation": [
						"Post Initiate Signature By Concept Employee ID And Document ID"
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
						"Sign Document"
					],
					"operation": [
						"Post Initiate Signature By Concept Employee ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "Body",
			"name": "body",
			"type": "string",
			"default": {
				"emailAddress": "test@test.com",
				"mobilePhoneNumber": "+31612345678",
				"name": "Ben Hur",
				"signingOrder": "2"
			},
			"routing": {
				"request": {
					"body": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sign Document"
					],
					"operation": [
						"Post Initiate Signature By Concept Employee ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/conceptemployees/{conceptEmployeeId}/documents/{documentId}/signature/report",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sign Document"
					],
					"operation": [
						"Get Signature Report By Concept Employee ID And Document ID"
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
						"Sign Document"
					],
					"operation": [
						"Get Signature Report By Concept Employee ID And Document ID"
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
						"Sign Document"
					],
					"operation": [
						"Get Signature Report By Concept Employee ID And Document ID"
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
						"Sign Document"
					],
					"operation": [
						"Get Signature Report By Concept Employee ID And Document ID"
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
						"Sign Document"
					],
					"operation": [
						"Get Signature Report By Concept Employee ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /providers/employers/employees/employments/{employmentId}/documents/{documentId}/signature",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sign Document"
					],
					"operation": [
						"Delete Signature By Employment ID And Document ID"
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
						"Sign Document"
					],
					"operation": [
						"Delete Signature By Employment ID And Document ID"
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
						"Sign Document"
					],
					"operation": [
						"Delete Signature By Employment ID And Document ID"
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
						"Sign Document"
					],
					"operation": [
						"Delete Signature By Employment ID And Document ID"
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
						"Sign Document"
					],
					"operation": [
						"Delete Signature By Employment ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/{employmentId}/documents/{documentId}/signature",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sign Document"
					],
					"operation": [
						"Get Signature By Employment ID And Document ID"
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
						"Sign Document"
					],
					"operation": [
						"Get Signature By Employment ID And Document ID"
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
						"Sign Document"
					],
					"operation": [
						"Get Signature By Employment ID And Document ID"
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
						"Sign Document"
					],
					"operation": [
						"Get Signature By Employment ID And Document ID"
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
						"Sign Document"
					],
					"operation": [
						"Get Signature By Employment ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/employees/employments/{employmentId}/documents/{documentId}/signature/initiate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sign Document"
					],
					"operation": [
						"Post Initiate Signature By Employment ID And Document ID"
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
						"Sign Document"
					],
					"operation": [
						"Post Initiate Signature By Employment ID And Document ID"
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
						"Sign Document"
					],
					"operation": [
						"Post Initiate Signature By Employment ID And Document ID"
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
						"Sign Document"
					],
					"operation": [
						"Post Initiate Signature By Employment ID And Document ID"
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
						"Sign Document"
					],
					"operation": [
						"Post Initiate Signature By Employment ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "Body",
			"name": "body",
			"type": "string",
			"default": {
				"emailAddress": "test@test.com",
				"mobilePhoneNumber": "+31612345678",
				"name": "Ben Hur",
				"signingOrder": "2"
			},
			"routing": {
				"request": {
					"body": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sign Document"
					],
					"operation": [
						"Post Initiate Signature By Employment ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/{employmentId}/documents/{documentId}/signature/report",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sign Document"
					],
					"operation": [
						"Get Signature Report By Employment ID And Document ID"
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
						"Sign Document"
					],
					"operation": [
						"Get Signature Report By Employment ID And Document ID"
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
						"Sign Document"
					],
					"operation": [
						"Get Signature Report By Employment ID And Document ID"
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
						"Sign Document"
					],
					"operation": [
						"Get Signature Report By Employment ID And Document ID"
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
						"Sign Document"
					],
					"operation": [
						"Get Signature Report By Employment ID And Document ID"
					]
				}
			}
		},
];
