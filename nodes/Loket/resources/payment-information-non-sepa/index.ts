import type { INodeProperties } from 'n8n-workflow';

export const paymentInformationNonSepaDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Information Non SEPA"
					]
				}
			},
			"options": [
				{
					"name": "Delete Payment Information Non Sepa By Payment Information Non Sepa ID",
					"value": "Delete Payment Information Non Sepa By Payment Information Non Sepa ID",
					"action": "Delete a payment information non-SEPA record",
					"description": "__Activity name :__ DeletePaymentInformationNonSepaByPaymentInformationNonSepaId\n\nDelete a payment information non-SEPA record (for an employment)\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/employees/employments/paymentinformationnonsepa/{{$parameter[\"paymentInformationNonSepaId\"]}}"
						}
					}
				},
				{
					"name": "Get Payment Information Non Sepa Bypayment Information Non Sepa ID",
					"value": "Get Payment Information Non Sepa Bypayment Information Non Sepa ID",
					"action": "Get the details of a payment information non-SEPA",
					"description": "__Activity name :__ GetPaymentInformationNonSepaByPaymentInformationNonSepaId\n\nGet the detail of a payment information non-SEPA record.\nFor a specific payroll component, the record indicates to which IBAN account number it should be related for the purpose of outgoing payments. \nThis includes, but is not limited to, the payment of wages for an employment.\nFor each payroll component there can only be one outgoing payment record per employment.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/paymentinformationnonsepa/{{$parameter[\"paymentInformationNonSepaId\"]}}"
						}
					}
				},
				{
					"name": "Put Payment Information Non Sepa By Payment Information Non Sepa ID",
					"value": "Put Payment Information Non Sepa By Payment Information Non Sepa ID",
					"action": "Change the details of a payment information non-SEPA",
					"description": "__Activity name :__ PutPaymentInformationNonSepaByPaymentInformationNonSepaId\n\nEdit an existing payment information non-SEPA record (for an employment).\nFor each unique payroll component there can only be one payment record per employment.\n\n__Metadata :__ Possible values for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the URL\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/employees/employments/paymentinformationnonsepa/{{$parameter[\"paymentInformationNonSepaId\"]}}"
						}
					}
				},
				{
					"name": "Get Payment Information Non Sepa By Employment ID",
					"value": "Get Payment Information Non Sepa By Employment ID",
					"action": "Get a list of payment information non-SEPA",
					"description": "__Activity name :__ GetPaymentInformationNonSepaByEmploymentId\n\nGet a list of payment information for non-SEPA bank accounts for an employment. These are payments to be performed that will NOT be based on an IBAN (which is the standard), so this is mostly useful for foreign payments that are not based within a SEPA-country. \n\nFor a specific payroll component, the record indicates to which account payments will be made.  This includes, but is not limited to, the payment of wages for an employment.\n\nFor each payroll component there can only be one payment Information record per employment.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/paymentinformationnonsepa"
						}
					}
				},
				{
					"name": "Post Payment Information Non Sepa By Employment ID",
					"value": "Post Payment Information Non Sepa By Employment ID",
					"action": "Create a new payment information non-SEPA record",
					"description": "__Activity name :__ PostPaymentInformationNonSepaByEmploymentId\n\nCreate a new payment information non-SEPA record for an employment. For each unique payroll component there can only be one payment information non-SEPA record per employment.\n\n__Metadata :__ Possible values for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the URL\n\n__Defaults :__ Default values for a new object can be acquired by adding `/defaults' to the POST URL.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/paymentinformationnonsepa"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /providers/employers/employees/employments/paymentinformationnonsepa/{paymentInformationNonSepaId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Information Non SEPA"
					],
					"operation": [
						"Delete Payment Information Non Sepa By Payment Information Non Sepa ID"
					]
				}
			}
		},
		{
			"displayName": "Payment Information Non Sepa ID",
			"name": "paymentInformationNonSepaId",
			"required": true,
			"description": "The unique identifier of the SEPA payment record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Information Non SEPA"
					],
					"operation": [
						"Delete Payment Information Non Sepa By Payment Information Non Sepa ID"
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
						"Payment Information Non SEPA"
					],
					"operation": [
						"Delete Payment Information Non Sepa By Payment Information Non Sepa ID"
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
						"Payment Information Non SEPA"
					],
					"operation": [
						"Delete Payment Information Non Sepa By Payment Information Non Sepa ID"
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
						"Payment Information Non SEPA"
					],
					"operation": [
						"Delete Payment Information Non Sepa By Payment Information Non Sepa ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/paymentinformationnonsepa/{paymentInformationNonSepaId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Information Non SEPA"
					],
					"operation": [
						"Get Payment Information Non Sepa Bypayment Information Non Sepa ID"
					]
				}
			}
		},
		{
			"displayName": "Payment Information Non Sepa ID",
			"name": "paymentInformationNonSepaId",
			"required": true,
			"description": "The unique identifier of the SEPA payment record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Information Non SEPA"
					],
					"operation": [
						"Get Payment Information Non Sepa Bypayment Information Non Sepa ID"
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
						"Payment Information Non SEPA"
					],
					"operation": [
						"Get Payment Information Non Sepa Bypayment Information Non Sepa ID"
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
						"Payment Information Non SEPA"
					],
					"operation": [
						"Get Payment Information Non Sepa Bypayment Information Non Sepa ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/employees/employments/paymentinformationnonsepa/{paymentInformationNonSepaId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Information Non SEPA"
					],
					"operation": [
						"Put Payment Information Non Sepa By Payment Information Non Sepa ID"
					]
				}
			}
		},
		{
			"displayName": "Payment Information Non Sepa ID",
			"name": "paymentInformationNonSepaId",
			"required": true,
			"description": "The unique identifier of the SEPA payment record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Information Non SEPA"
					],
					"operation": [
						"Put Payment Information Non Sepa By Payment Information Non Sepa ID"
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
						"Payment Information Non SEPA"
					],
					"operation": [
						"Put Payment Information Non Sepa By Payment Information Non Sepa ID"
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
						"Payment Information Non SEPA"
					],
					"operation": [
						"Put Payment Information Non Sepa By Payment Information Non Sepa ID"
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
						"Payment Information Non SEPA"
					],
					"operation": [
						"Put Payment Information Non Sepa By Payment Information Non Sepa ID"
					]
				}
			}
		},
		{
			"displayName": "Bank",
			"name": "bank",
			"type": "json",
			"default": "{\n  \"address\": \"Via Roma 3\",\n  \"bankIdentifierCode\": \"AUDFDE21\",\n  \"city\": \"Rome\",\n  \"country\": {\n    \"isoCode\": \"NL\",\n    \"key\": 1,\n    \"value\": \"Netherlands\"\n  },\n  \"name\": \"Ben Hur\"\n}",
			"description": "Information regarding the bank coresponding with the bank account number",
			"routing": {
				"send": {
					"property": "bank",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Information Non SEPA"
					],
					"operation": [
						"Put Payment Information Non Sepa By Payment Information Non Sepa ID"
					]
				}
			}
		},
		{
			"displayName": "Bank Account Number",
			"name": "bankAccountNumber",
			"type": "string",
			"default": "0403830171874018",
			"description": "The bank account number\n",
			"routing": {
				"send": {
					"property": "bankAccountNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Information Non SEPA"
					],
					"operation": [
						"Put Payment Information Non Sepa By Payment Information Non Sepa ID"
					]
				}
			}
		},
		{
			"displayName": "Beneficiary",
			"name": "beneficiary",
			"type": "json",
			"default": "{\n  \"address\": \"Via Roma 3\",\n  \"city\": \"Rome\",\n  \"country\": {\n    \"isoCode\": \"NL\",\n    \"key\": 1,\n    \"value\": \"Netherlands\"\n  },\n  \"name\": \"Ben Hur\"\n}",
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
						"Payment Information Non SEPA"
					],
					"operation": [
						"Put Payment Information Non Sepa By Payment Information Non Sepa ID"
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
						"Payment Information Non SEPA"
					],
					"operation": [
						"Put Payment Information Non Sepa By Payment Information Non Sepa ID"
					]
				}
			}
		},
		{
			"displayName": "Payroll Component",
			"name": "payrollComponent",
			"type": "json",
			"default": "{\n  \"key\": 260,\n  \"value\": \"NETTOLOON\"\n}",
			"description": "The payroll component for which the outgoing payment records applies.\nEach payroll component can only be used once per employment.\n\n`payrollComponent` is a metadata field within the payroll administration context. Possible values can be managed by the user.\n",
			"routing": {
				"send": {
					"property": "payrollComponent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Information Non SEPA"
					],
					"operation": [
						"Put Payment Information Non Sepa By Payment Information Non Sepa ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/{employmentId}/paymentinformationnonsepa",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Information Non SEPA"
					],
					"operation": [
						"Get Payment Information Non Sepa By Employment ID"
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
						"Payment Information Non SEPA"
					],
					"operation": [
						"Get Payment Information Non Sepa By Employment ID"
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
						"Payment Information Non SEPA"
					],
					"operation": [
						"Get Payment Information Non Sepa By Employment ID"
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
						"Payment Information Non SEPA"
					],
					"operation": [
						"Get Payment Information Non Sepa By Employment ID"
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
						"Payment Information Non SEPA"
					],
					"operation": [
						"Get Payment Information Non Sepa By Employment ID"
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
						"Payment Information Non SEPA"
					],
					"operation": [
						"Get Payment Information Non Sepa By Employment ID"
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
						"Payment Information Non SEPA"
					],
					"operation": [
						"Get Payment Information Non Sepa By Employment ID"
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
						"Payment Information Non SEPA"
					],
					"operation": [
						"Get Payment Information Non Sepa By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/employees/employments/{employmentId}/paymentinformationnonsepa",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Information Non SEPA"
					],
					"operation": [
						"Post Payment Information Non Sepa By Employment ID"
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
						"Payment Information Non SEPA"
					],
					"operation": [
						"Post Payment Information Non Sepa By Employment ID"
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
						"Payment Information Non SEPA"
					],
					"operation": [
						"Post Payment Information Non Sepa By Employment ID"
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
						"Payment Information Non SEPA"
					],
					"operation": [
						"Post Payment Information Non Sepa By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/employees/employments/{employmentId}/paymentinformationnonsepa<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Information Non SEPA"
					],
					"operation": [
						"Post Payment Information Non Sepa By Employment ID"
					]
				}
			}
		},
];
