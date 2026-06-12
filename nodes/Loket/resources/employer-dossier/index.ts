import type { INodeProperties } from 'n8n-workflow';

export const employerDossierDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Employer Dossier"
					]
				}
			},
			"options": [
				{
					"name": "Get Documents By Employer ID",
					"value": "Get Documents By Employer ID",
					"action": "Get a list of employer dossier documents",
					"description": "__Activity name :__ GetDocumentsByEmployerId\n\nGet a list of documents within the employer dossier (werkgeverdossier). Via Qwoater.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/documents"
						}
					}
				},
				{
					"name": "Post Document By Employer ID",
					"value": "Post Document By Employer ID",
					"action": "Upload a document to the employer dossier",
					"description": "__Activity name :__ PostDocumentByEmployerId\n\n__Metadata:__ Possible options for fields of the type 'metadata' can be acquired(GET)by adding `/metadata` to the POST URL.\n\nUpload a document within the employer dossier (werkgeverdossier). Via Qwoater.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/documents"
						}
					}
				},
				{
					"name": "Delete Document By Employer ID And Document ID",
					"value": "Delete Document By Employer ID And Document ID",
					"action": "Delete a document in the employer dossier",
					"description": "__Activity name:__ DeleteDocumentByEmployerIdAndDocumentId\n\nDelete a document in the employer dossier\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/documents/{{$parameter[\"documentId\"]}}"
						}
					}
				},
				{
					"name": "Get Document By Employer ID And Document ID",
					"value": "Get Document By Employer ID And Document ID",
					"action": "Download employer dossier document",
					"description": "__Activity name :__ GetDocumentByEmployerIdAndDocumentId\n\nDownload the file of a given employer dossier entry. Via Qwoater.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/documents/{{$parameter[\"documentId\"]}}"
						}
					}
				},
				{
					"name": "Put Document By Employer ID And Document ID",
					"value": "Put Document By Employer ID And Document ID",
					"action": "Edit the details of an employer dossier document",
					"description": "__Activity name:__ PutDocumentByEmployerIdAndDocumentId\n\nEdit the details for a document in the employer dossier\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/documents/{{$parameter[\"documentId\"]}}"
						}
					}
				},
				{
					"name": "Get Audit Trail By Employer ID And Document ID",
					"value": "Get Audit Trail By Employer ID And Document ID",
					"action": "Get audittrail for the document in the employer dossier",
					"description": "__Activity name :__ GetAuditTrailByEmployerIdAndDocumentId\n\nGet audittrail for the document in the employer dossier.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/documents/{{$parameter[\"documentId\"]}}/audittrail"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/employers/{employerId}/documents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employer Dossier"
					],
					"operation": [
						"Get Documents By Employer ID"
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
						"Employer Dossier"
					],
					"operation": [
						"Get Documents By Employer ID"
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
						"Employer Dossier"
					],
					"operation": [
						"Get Documents By Employer ID"
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
						"Employer Dossier"
					],
					"operation": [
						"Get Documents By Employer ID"
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
						"Employer Dossier"
					],
					"operation": [
						"Get Documents By Employer ID"
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
						"Employer Dossier"
					],
					"operation": [
						"Get Documents By Employer ID"
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
						"Employer Dossier"
					],
					"operation": [
						"Get Documents By Employer ID"
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
						"Employer Dossier"
					],
					"operation": [
						"Get Documents By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/{employerId}/documents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employer Dossier"
					],
					"operation": [
						"Post Document By Employer ID"
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
						"Employer Dossier"
					],
					"operation": [
						"Post Document By Employer ID"
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
						"Employer Dossier"
					],
					"operation": [
						"Post Document By Employer ID"
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
						"Employer Dossier"
					],
					"operation": [
						"Post Document By Employer ID"
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
						"Employer Dossier"
					],
					"operation": [
						"Post Document By Employer ID"
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
						"Employer Dossier"
					],
					"operation": [
						"Post Document By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /providers/employers/{employerId}/documents/{documentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employer Dossier"
					],
					"operation": [
						"Delete Document By Employer ID And Document ID"
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
						"Employer Dossier"
					],
					"operation": [
						"Delete Document By Employer ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "The unique identifier of the employer dossier document",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Employer Dossier"
					],
					"operation": [
						"Delete Document By Employer ID And Document ID"
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
						"Employer Dossier"
					],
					"operation": [
						"Delete Document By Employer ID And Document ID"
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
						"Employer Dossier"
					],
					"operation": [
						"Delete Document By Employer ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/{employerId}/documents/{documentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employer Dossier"
					],
					"operation": [
						"Get Document By Employer ID And Document ID"
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
						"Employer Dossier"
					],
					"operation": [
						"Get Document By Employer ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "The unique identifier of the employer dossier document",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Employer Dossier"
					],
					"operation": [
						"Get Document By Employer ID And Document ID"
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
						"Employer Dossier"
					],
					"operation": [
						"Get Document By Employer ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/{employerId}/documents/{documentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employer Dossier"
					],
					"operation": [
						"Put Document By Employer ID And Document ID"
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
						"Employer Dossier"
					],
					"operation": [
						"Put Document By Employer ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "The unique identifier of the employer dossier document",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Employer Dossier"
					],
					"operation": [
						"Put Document By Employer ID And Document ID"
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
						"Employer Dossier"
					],
					"operation": [
						"Put Document By Employer ID And Document ID"
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
						"Employer Dossier"
					],
					"operation": [
						"Put Document By Employer ID And Document ID"
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
						"Employer Dossier"
					],
					"operation": [
						"Put Document By Employer ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "Category",
			"name": "category",
			"type": "string",
			"default": "Arbeidsovereenkomst",
			"description": "The category of the document. Provided value must be a valid metadata option. Qwoater: DocumentType\n",
			"routing": {
				"send": {
					"property": "category",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer Dossier"
					],
					"operation": [
						"Put Document By Employer ID And Document ID"
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
						"Employer Dossier"
					],
					"operation": [
						"Put Document By Employer ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "Date Of Submission",
			"name": "dateOfSubmission",
			"type": "string",
			"default": "2018-05-08",
			"description": "The time at which document was submitted. Qwoater: CreationDate\n",
			"routing": {
				"send": {
					"property": "dateOfSubmission",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer Dossier"
					],
					"operation": [
						"Put Document By Employer ID And Document ID"
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
						"Employer Dossier"
					],
					"operation": [
						"Put Document By Employer ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "Is Read By",
			"name": "isReadBy",
			"type": "json",
			"default": "{\n  \"departmentManager\": false,\n  \"employee\": false,\n  \"employer\": false,\n  \"provider\": false\n}",
			"routing": {
				"send": {
					"property": "isReadBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer Dossier"
					],
					"operation": [
						"Put Document By Employer ID And Document ID"
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
						"Employer Dossier"
					],
					"operation": [
						"Put Document By Employer ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "Submitted By",
			"name": "submittedBy",
			"type": "string",
			"default": "Bowls, John",
			"description": "The name of the user that has submitted the document. Qwoater: Docfield 34 Gebruiker\n",
			"routing": {
				"send": {
					"property": "submittedBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Employer Dossier"
					],
					"operation": [
						"Put Document By Employer ID And Document ID"
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
						"Employer Dossier"
					],
					"operation": [
						"Put Document By Employer ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/{employerId}/documents/{documentId}/audittrail",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Employer Dossier"
					],
					"operation": [
						"Get Audit Trail By Employer ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "The unique identifier of the employer dossier document",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Employer Dossier"
					],
					"operation": [
						"Get Audit Trail By Employer ID And Document ID"
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
						"Employer Dossier"
					],
					"operation": [
						"Get Audit Trail By Employer ID And Document ID"
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
						"Employer Dossier"
					],
					"operation": [
						"Get Audit Trail By Employer ID And Document ID"
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
						"Employer Dossier"
					],
					"operation": [
						"Get Audit Trail By Employer ID And Document ID"
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
						"Employer Dossier"
					],
					"operation": [
						"Get Audit Trail By Employer ID And Document ID"
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
						"Employer Dossier"
					],
					"operation": [
						"Get Audit Trail By Employer ID And Document ID"
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
						"Employer Dossier"
					],
					"operation": [
						"Get Audit Trail By Employer ID And Document ID"
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
						"Employer Dossier"
					],
					"operation": [
						"Get Audit Trail By Employer ID And Document ID"
					]
				}
			}
		},
];
