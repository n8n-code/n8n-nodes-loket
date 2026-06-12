import type { INodeProperties } from 'n8n-workflow';

export const conceptEmployeeDossierDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Concept Employee Dossier"
					]
				}
			},
			"options": [
				{
					"name": "Get Documents By Concept Employee ID",
					"value": "Get Documents By Concept Employee ID",
					"action": "Get a list of concept employee dossier documents",
					"description": "__Activity name :__ GetDocumentsByConceptEmployeeId\n\nGet a list of documents within the concept employee's dossier (werknemerdossier). Via Qwoater.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/conceptemployees/{{$parameter[\"conceptEmployeeId\"]}}/documents"
						}
					}
				},
				{
					"name": "Post Document By Concept Employee ID",
					"value": "Post Document By Concept Employee ID",
					"action": "Upload a document to the concept employee dossier",
					"description": "__Activity name :__ PostDocumentByConceptEmployeeId\n\n__Metadata:__ Possible options for fields of the type 'metadata' can be acquired(GET)by adding `/metadata` to the POST URL.\n\nUpload a document within the concept employee's dossier (werknemerdossier). Via Qwoater.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/conceptemployees/{{$parameter[\"conceptEmployeeId\"]}}/documents"
						}
					}
				},
				{
					"name": "Delete Document By Concept Employee ID And Document ID",
					"value": "Delete Document By Concept Employee ID And Document ID",
					"action": "Delete a document in the concept employee dossier",
					"description": "__Activity name:__ DeleteDocumentByConceptEmployeeIdAndDocumentId\n\nDelete a document in the concept employee dossier\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/conceptemployees/{{$parameter[\"conceptEmployeeId\"]}}/documents/{{$parameter[\"documentId\"]}}"
						}
					}
				},
				{
					"name": "Get Document By Concept Employee ID And Document ID",
					"value": "Get Document By Concept Employee ID And Document ID",
					"action": "Download concept employee dossier document",
					"description": "__Activity name :__ GetDocumentByConceptEmployeeIdAndDocumentId\n\nDownload the file of a given concept employee dossier entry. Via Qwoater.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/conceptemployees/{{$parameter[\"conceptEmployeeId\"]}}/documents/{{$parameter[\"documentId\"]}}"
						}
					}
				},
				{
					"name": "Put Document By Concept Employee ID And Document ID",
					"value": "Put Document By Concept Employee ID And Document ID",
					"action": "Edit the details of an concept employee dossier document",
					"description": "__Activity name:__ PutDocumentByConceptEmployeeIdAndDocumentId\n\nEdit the details for a document in the concept employee dossier\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/conceptemployees/{{$parameter[\"conceptEmployeeId\"]}}/documents/{{$parameter[\"documentId\"]}}"
						}
					}
				},
				{
					"name": "Get Audit Trail By Concept Employee ID And Document ID",
					"value": "Get Audit Trail By Concept Employee ID And Document ID",
					"action": "Get audittrail for the document in the concept employee dossier",
					"description": "__Activity name :__ GetAuditTrailByConceptEmployeeIdAndDocumentId\n\nGet audittrail for the document in the concept employee dossier.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/conceptemployees/{{$parameter[\"conceptEmployeeId\"]}}/documents/{{$parameter[\"documentId\"]}}/audittrail"
						}
					}
				},
				{
					"name": "Delete Dossier By Concept Employee ID",
					"value": "Delete Dossier By Concept Employee ID",
					"action": "Delete the complete concept employee dossier",
					"description": "__Activity name:__ DeleteDossierByConceptEmployeeId\n\nDelete a complete dossier, with all documents in it, for the concept employee\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/conceptemployees/{{$parameter[\"conceptEmployeeId\"]}}/dossier\""
						}
					}
				},
				{
					"name": "Get Document Count By Concept Employee ID",
					"value": "Get Document Count By Concept Employee ID",
					"action": "Document count",
					"description": "__Activity name :__ GetDocumentCountByConceptEmployeeId\n\nGet a count of the number of documents in the dossier. Via Qwoater.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/conceptemployees/{{$parameter[\"conceptEmployeeId\"]}}/dossier\""
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/employers/conceptemployees/{conceptEmployeeId}/documents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Concept Employee Dossier"
					],
					"operation": [
						"Get Documents By Concept Employee ID"
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
						"Concept Employee Dossier"
					],
					"operation": [
						"Get Documents By Concept Employee ID"
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
						"Concept Employee Dossier"
					],
					"operation": [
						"Get Documents By Concept Employee ID"
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
						"Concept Employee Dossier"
					],
					"operation": [
						"Get Documents By Concept Employee ID"
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
						"Concept Employee Dossier"
					],
					"operation": [
						"Get Documents By Concept Employee ID"
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
						"Concept Employee Dossier"
					],
					"operation": [
						"Get Documents By Concept Employee ID"
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
						"Concept Employee Dossier"
					],
					"operation": [
						"Get Documents By Concept Employee ID"
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
						"Concept Employee Dossier"
					],
					"operation": [
						"Get Documents By Concept Employee ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/conceptemployees/{conceptEmployeeId}/documents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Concept Employee Dossier"
					],
					"operation": [
						"Post Document By Concept Employee ID"
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
						"Concept Employee Dossier"
					],
					"operation": [
						"Post Document By Concept Employee ID"
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
						"Concept Employee Dossier"
					],
					"operation": [
						"Post Document By Concept Employee ID"
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
						"Concept Employee Dossier"
					],
					"operation": [
						"Post Document By Concept Employee ID"
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
						"Concept Employee Dossier"
					],
					"operation": [
						"Post Document By Concept Employee ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /providers/employers/conceptemployees/{conceptEmployeeId}/documents/{documentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Concept Employee Dossier"
					],
					"operation": [
						"Delete Document By Concept Employee ID And Document ID"
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
						"Concept Employee Dossier"
					],
					"operation": [
						"Delete Document By Concept Employee ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "The unique identifier of the employment dossier document",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Concept Employee Dossier"
					],
					"operation": [
						"Delete Document By Concept Employee ID And Document ID"
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
						"Concept Employee Dossier"
					],
					"operation": [
						"Delete Document By Concept Employee ID And Document ID"
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
						"Concept Employee Dossier"
					],
					"operation": [
						"Delete Document By Concept Employee ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/conceptemployees/{conceptEmployeeId}/documents/{documentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Concept Employee Dossier"
					],
					"operation": [
						"Get Document By Concept Employee ID And Document ID"
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
						"Concept Employee Dossier"
					],
					"operation": [
						"Get Document By Concept Employee ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "The unique identifier of the employment dossier document",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Concept Employee Dossier"
					],
					"operation": [
						"Get Document By Concept Employee ID And Document ID"
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
						"Concept Employee Dossier"
					],
					"operation": [
						"Get Document By Concept Employee ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/conceptemployees/{conceptEmployeeId}/documents/{documentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Concept Employee Dossier"
					],
					"operation": [
						"Put Document By Concept Employee ID And Document ID"
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
						"Concept Employee Dossier"
					],
					"operation": [
						"Put Document By Concept Employee ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "The unique identifier of the employment dossier document",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Concept Employee Dossier"
					],
					"operation": [
						"Put Document By Concept Employee ID And Document ID"
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
						"Concept Employee Dossier"
					],
					"operation": [
						"Put Document By Concept Employee ID And Document ID"
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
						"Concept Employee Dossier"
					],
					"operation": [
						"Put Document By Concept Employee ID And Document ID"
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
						"Concept Employee Dossier"
					],
					"operation": [
						"Put Document By Concept Employee ID And Document ID"
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
						"Concept Employee Dossier"
					],
					"operation": [
						"Put Document By Concept Employee ID And Document ID"
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
						"Concept Employee Dossier"
					],
					"operation": [
						"Put Document By Concept Employee ID And Document ID"
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
						"Concept Employee Dossier"
					],
					"operation": [
						"Put Document By Concept Employee ID And Document ID"
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
						"Concept Employee Dossier"
					],
					"operation": [
						"Put Document By Concept Employee ID And Document ID"
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
						"Concept Employee Dossier"
					],
					"operation": [
						"Put Document By Concept Employee ID And Document ID"
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
						"Concept Employee Dossier"
					],
					"operation": [
						"Put Document By Concept Employee ID And Document ID"
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
						"Concept Employee Dossier"
					],
					"operation": [
						"Put Document By Concept Employee ID And Document ID"
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
						"Concept Employee Dossier"
					],
					"operation": [
						"Put Document By Concept Employee ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/conceptemployees/{conceptEmployeeId}/documents/{documentId}/audittrail",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Concept Employee Dossier"
					],
					"operation": [
						"Get Audit Trail By Concept Employee ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "The unique identifier of the employment dossier document",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Concept Employee Dossier"
					],
					"operation": [
						"Get Audit Trail By Concept Employee ID And Document ID"
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
						"Concept Employee Dossier"
					],
					"operation": [
						"Get Audit Trail By Concept Employee ID And Document ID"
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
						"Concept Employee Dossier"
					],
					"operation": [
						"Get Audit Trail By Concept Employee ID And Document ID"
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
						"Concept Employee Dossier"
					],
					"operation": [
						"Get Audit Trail By Concept Employee ID And Document ID"
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
						"Concept Employee Dossier"
					],
					"operation": [
						"Get Audit Trail By Concept Employee ID And Document ID"
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
						"Concept Employee Dossier"
					],
					"operation": [
						"Get Audit Trail By Concept Employee ID And Document ID"
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
						"Concept Employee Dossier"
					],
					"operation": [
						"Get Audit Trail By Concept Employee ID And Document ID"
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
						"Concept Employee Dossier"
					],
					"operation": [
						"Get Audit Trail By Concept Employee ID And Document ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /providers/employers/conceptemployees/{conceptEmployeeId}/dossier\"",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Concept Employee Dossier"
					],
					"operation": [
						"Delete Dossier By Concept Employee ID"
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
						"Concept Employee Dossier"
					],
					"operation": [
						"Delete Dossier By Concept Employee ID"
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
						"Concept Employee Dossier"
					],
					"operation": [
						"Delete Dossier By Concept Employee ID"
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
						"Concept Employee Dossier"
					],
					"operation": [
						"Delete Dossier By Concept Employee ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/conceptemployees/{conceptEmployeeId}/dossier\"",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Concept Employee Dossier"
					],
					"operation": [
						"Get Document Count By Concept Employee ID"
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
						"Concept Employee Dossier"
					],
					"operation": [
						"Get Document Count By Concept Employee ID"
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
						"Concept Employee Dossier"
					],
					"operation": [
						"Get Document Count By Concept Employee ID"
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
						"Concept Employee Dossier"
					],
					"operation": [
						"Get Document Count By Concept Employee ID"
					]
				}
			}
		},
];
