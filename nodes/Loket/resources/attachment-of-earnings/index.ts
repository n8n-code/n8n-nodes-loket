import type { INodeProperties } from 'n8n-workflow';

export const attachmentOfEarningsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Attachment Of Earnings"
					]
				}
			},
			"options": [
				{
					"name": "Delete Attachment Of Earnings By Attachment Of Earnings ID",
					"value": "Delete Attachment Of Earnings By Attachment Of Earnings ID",
					"action": "Delete an attachment of earnings record",
					"description": "__Activity name :__ DeleteAttachmentOfEarningsByAttachmentOfEarningsId\n\nDelete an existing attachment of earnings record\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/employees/employments/attachmentsofearnings/{{$parameter[\"attachmentOfEarningsId\"]}}"
						}
					}
				},
				{
					"name": "Get Attachment Of Earnings By Attachment Of Earnings ID",
					"value": "Get Attachment Of Earnings By Attachment Of Earnings ID",
					"action": "Get the details of an attachment of earnings record",
					"description": "__Activity name :__ GetAttachmentOfEarningsByAttachmentOfEarningsId\n\nGet the details of an attachment of earnings record\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/attachmentsofearnings/{{$parameter[\"attachmentOfEarningsId\"]}}"
						}
					}
				},
				{
					"name": "Put Attachment Of Earnings By Attachment Of Earnings ID",
					"value": "Put Attachment Of Earnings By Attachment Of Earnings ID",
					"action": "Edit the details of an attachment of earnings record",
					"description": "__Activity name :__ PutAttachmentOfEarningsByAttachmentOfEarningsId\n\nUpdate the details of a single attachment of earnings record\n\n__Metadata :__ Possible values for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the URL\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/employees/employments/attachmentsofearnings/{{$parameter[\"attachmentOfEarningsId\"]}}"
						}
					}
				},
				{
					"name": "Get Attachment Of Earnings By Employment ID",
					"value": "Get Attachment Of Earnings By Employment ID",
					"action": "Get a list of attachment of earnings records",
					"description": "__Activity name :__ GetAttachmentOfEarningsByEmploymentId\n\nGet a list of attachment of earnings records\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/attachmentsofearnings"
						}
					}
				},
				{
					"name": "Post Attachment Of Earnings By Employment ID",
					"value": "Post Attachment Of Earnings By Employment ID",
					"action": "Create a new attachment of earnings record",
					"description": "__Activity name :__ PostAttachmentOfEarningsByEmploymentId\n\nCreate a new attachment of earnings record for an employment.\n\n__Metadata :__ Possible values for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the URL\n\n__Defaults :__ Default values for a new object can be acquired by adding `/defaults' to the POST URL.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/attachmentsofearnings"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /providers/employers/employees/employments/attachmentsofearnings/{attachmentOfEarningsId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Attachment Of Earnings"
					],
					"operation": [
						"Delete Attachment Of Earnings By Attachment Of Earnings ID"
					]
				}
			}
		},
		{
			"displayName": "Attachment Of Earnings ID",
			"name": "attachmentOfEarningsId",
			"required": true,
			"description": "The unique identifier of a record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Attachment Of Earnings"
					],
					"operation": [
						"Delete Attachment Of Earnings By Attachment Of Earnings ID"
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
						"Attachment Of Earnings"
					],
					"operation": [
						"Delete Attachment Of Earnings By Attachment Of Earnings ID"
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
						"Attachment Of Earnings"
					],
					"operation": [
						"Delete Attachment Of Earnings By Attachment Of Earnings ID"
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
						"Attachment Of Earnings"
					],
					"operation": [
						"Delete Attachment Of Earnings By Attachment Of Earnings ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/attachmentsofearnings/{attachmentOfEarningsId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Attachment Of Earnings"
					],
					"operation": [
						"Get Attachment Of Earnings By Attachment Of Earnings ID"
					]
				}
			}
		},
		{
			"displayName": "Attachment Of Earnings ID",
			"name": "attachmentOfEarningsId",
			"required": true,
			"description": "The unique identifier of a record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Attachment Of Earnings"
					],
					"operation": [
						"Get Attachment Of Earnings By Attachment Of Earnings ID"
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
						"Attachment Of Earnings"
					],
					"operation": [
						"Get Attachment Of Earnings By Attachment Of Earnings ID"
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
						"Attachment Of Earnings"
					],
					"operation": [
						"Get Attachment Of Earnings By Attachment Of Earnings ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/employees/employments/attachmentsofearnings/{attachmentOfEarningsId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Attachment Of Earnings"
					],
					"operation": [
						"Put Attachment Of Earnings By Attachment Of Earnings ID"
					]
				}
			}
		},
		{
			"displayName": "Attachment Of Earnings ID",
			"name": "attachmentOfEarningsId",
			"required": true,
			"description": "The unique identifier of a record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Attachment Of Earnings"
					],
					"operation": [
						"Put Attachment Of Earnings By Attachment Of Earnings ID"
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
						"Attachment Of Earnings"
					],
					"operation": [
						"Put Attachment Of Earnings By Attachment Of Earnings ID"
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
						"Attachment Of Earnings"
					],
					"operation": [
						"Put Attachment Of Earnings By Attachment Of Earnings ID"
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
						"Attachment Of Earnings"
					],
					"operation": [
						"Put Attachment Of Earnings By Attachment Of Earnings ID"
					]
				}
			}
		},
		{
			"displayName": "Beneficiary",
			"name": "beneficiary",
			"type": "json",
			"default": "{\n  \"city\": \"Rome\",\n  \"name\": \"Ben Hur\"\n}",
			"description": "Information regarding the beneficiary coresponding with the bank account number",
			"routing": {
				"send": {
					"property": "beneficiary",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Attachment Of Earnings"
					],
					"operation": [
						"Put Attachment Of Earnings By Attachment Of Earnings ID"
					]
				}
			}
		},
		{
			"displayName": "Creditor",
			"name": "creditor",
			"type": "json",
			"default": "{\n  \"priority\": 0,\n  \"type\": {\n    \"key\": 1,\n    \"value\": \"Preferente schuldeiser\"\n  }\n}",
			"description": "Information regarding the creditor",
			"routing": {
				"send": {
					"property": "creditor",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Attachment Of Earnings"
					],
					"operation": [
						"Put Attachment Of Earnings By Attachment Of Earnings ID"
					]
				}
			}
		},
		{
			"displayName": "Description 1",
			"name": "description1",
			"type": "string",
			"default": "Savings to different account",
			"description": "Description 1. Both description field values will be a line in the (unstructured) description of the SEPA file.\n",
			"routing": {
				"send": {
					"property": "description1",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Attachment Of Earnings"
					],
					"operation": [
						"Put Attachment Of Earnings By Attachment Of Earnings ID"
					]
				}
			}
		},
		{
			"displayName": "Description 2",
			"name": "description2",
			"type": "string",
			"default": "from net wage",
			"description": "Description 2. Both description field values will be a line in the (unstructured) description of the SEPA file.\n",
			"routing": {
				"send": {
					"property": "description2",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Attachment Of Earnings"
					],
					"operation": [
						"Put Attachment Of Earnings By Attachment Of Earnings ID"
					]
				}
			}
		},
		{
			"displayName": "Description Payslip",
			"name": "descriptionPayslip",
			"type": "string",
			"default": "payment to creditor x",
			"description": "This value is shown on the payslip to identify the attachment.\n",
			"routing": {
				"send": {
					"property": "descriptionPayslip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Attachment Of Earnings"
					],
					"operation": [
						"Put Attachment Of Earnings By Attachment Of Earnings ID"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"type": "string",
			"default": "2018-10-23",
			"description": "The end date of the record\n",
			"routing": {
				"send": {
					"property": "endDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Attachment Of Earnings"
					],
					"operation": [
						"Put Attachment Of Earnings By Attachment Of Earnings ID"
					]
				}
			}
		},
		{
			"displayName": "Fixed Payment Per Payroll Period",
			"name": "fixedPaymentPerPayrollPeriod",
			"type": "number",
			"default": 50,
			"description": "Set a fixed sum to be payed every payroll period.\n\n__Note:__ If left empty the \"available\" earnings will be calculated in the payroll run by subtracting the protected earnings threshold (beslagvrijevoet) from the netwage. This method can lead to variable payments per payroll period.",
			"routing": {
				"send": {
					"property": "fixedPaymentPerPayrollPeriod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Attachment Of Earnings"
					],
					"operation": [
						"Put Attachment Of Earnings By Attachment Of Earnings ID"
					]
				}
			}
		},
		{
			"displayName": "Iban",
			"name": "iban",
			"type": "string",
			"default": "NL52ABNA0424968264",
			"description": "International Bank Account Number (IBAN). Only IBAN without spaces are accepted.\n",
			"routing": {
				"send": {
					"property": "iban",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Attachment Of Earnings"
					],
					"operation": [
						"Put Attachment Of Earnings By Attachment Of Earnings ID"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "b14acd0d-75d7-4fc8-8b22-4a3924585cab",
			"description": "The unique identifier of an object (GUID/UUID)",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Attachment Of Earnings"
					],
					"operation": [
						"Put Attachment Of Earnings By Attachment Of Earnings ID"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "2018-01-01",
			"description": "Start date of this record\n\n__NOTE :__ at the moment of performing a payroll run it will be checked what record is applicable for splitting from net salary at that date (based on the start- and enddate).\n",
			"routing": {
				"send": {
					"property": "startDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Attachment Of Earnings"
					],
					"operation": [
						"Put Attachment Of Earnings By Attachment Of Earnings ID"
					]
				}
			}
		},
		{
			"displayName": "Total Amount",
			"name": "totalAmount",
			"type": "json",
			"default": "{\n  \"owed\": 320,\n  \"paid\": {\n    \"inApprovedPayrollRuns\": 50,\n    \"inOpenPayrollRun\": 0\n  }\n}",
			"routing": {
				"send": {
					"property": "totalAmount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Attachment Of Earnings"
					],
					"operation": [
						"Put Attachment Of Earnings By Attachment Of Earnings ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/{employmentId}/attachmentsofearnings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Attachment Of Earnings"
					],
					"operation": [
						"Get Attachment Of Earnings By Employment ID"
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
						"Attachment Of Earnings"
					],
					"operation": [
						"Get Attachment Of Earnings By Employment ID"
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
						"Attachment Of Earnings"
					],
					"operation": [
						"Get Attachment Of Earnings By Employment ID"
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
						"Attachment Of Earnings"
					],
					"operation": [
						"Get Attachment Of Earnings By Employment ID"
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
						"Attachment Of Earnings"
					],
					"operation": [
						"Get Attachment Of Earnings By Employment ID"
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
						"Attachment Of Earnings"
					],
					"operation": [
						"Get Attachment Of Earnings By Employment ID"
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
						"Attachment Of Earnings"
					],
					"operation": [
						"Get Attachment Of Earnings By Employment ID"
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
						"Attachment Of Earnings"
					],
					"operation": [
						"Get Attachment Of Earnings By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/employees/employments/{employmentId}/attachmentsofearnings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Attachment Of Earnings"
					],
					"operation": [
						"Post Attachment Of Earnings By Employment ID"
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
						"Attachment Of Earnings"
					],
					"operation": [
						"Post Attachment Of Earnings By Employment ID"
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
						"Attachment Of Earnings"
					],
					"operation": [
						"Post Attachment Of Earnings By Employment ID"
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
						"Attachment Of Earnings"
					],
					"operation": [
						"Post Attachment Of Earnings By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/employees/employments/{employmentId}/attachmentsofearnings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Attachment Of Earnings"
					],
					"operation": [
						"Post Attachment Of Earnings By Employment ID"
					]
				}
			}
		},
];
