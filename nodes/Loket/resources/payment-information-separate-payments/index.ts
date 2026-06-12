import type { INodeProperties } from 'n8n-workflow';

export const paymentInformationSeparatePaymentsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Information Separate Payments"
					]
				}
			},
			"options": [
				{
					"name": "Delete Payment Information Sepa Separate Payment By Payment Information Sepa Separate Payment ID",
					"value": "Delete Payment Information Sepa Separate Payment By Payment Information Sepa Separate Payment ID",
					"action": "Delete a payment information SEPA separate payment record",
					"description": "__Activity name :__ DeletePaymentInformationSepaSeparatePaymentByPaymentInformationSepaSeparatePaymentId\n\nDelete an existing SEPA payment-record (for an employment)\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/employees/employments/paymentinformationsepaseparatepayments/{{$parameter[\"paymentInformationSepaSeparatePaymentId\"]}}"
						}
					}
				},
				{
					"name": "Get Payment Information Sepa Separate Payment By Payment Information Sepa Separate Payment ID",
					"value": "Get Payment Information Sepa Separate Payment By Payment Information Sepa Separate Payment ID",
					"action": "Get the details of a payment information SEPA separate payment record",
					"description": "__Activity name :__ GetPaymentInformationSepaSeparatePaymentByPaymentInformationSepaSeparatePaymentId\n\nGet the detail of a payment information SEPA record. For a specific payroll component, the record indicates to which IBAN account number it should be related for the purpose of outgoing payments.  This includes, but is not limited to, the payment of wages for an employment.  For each payroll component there can only be one outgoing payment record per employment.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/paymentinformationsepaseparatepayments/{{$parameter[\"paymentInformationSepaSeparatePaymentId\"]}}"
						}
					}
				},
				{
					"name": "Put Payment Information Sepa Separate Payment By Payment Information Sepa Separate Payment ID",
					"value": "Put Payment Information Sepa Separate Payment By Payment Information Sepa Separate Payment ID",
					"action": "Edit the details of a payment information separate payment record",
					"description": "__Activity name :__ PutPaymentInformationSepaSeparatePaymentByPaymentInformationSepaSeparatePaymentId\n\nEdit an existing separate payment-record (for an employment). For each unique payroll component there can only be one payment record per employment.\n\n__Metadata :__ Not applicable for this resource.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/employees/employments/paymentinformationsepaseparatepayments/{{$parameter[\"paymentInformationSepaSeparatePaymentId\"]}}"
						}
					}
				},
				{
					"name": "Get Payment Information Sepa Separate Payment By Employment ID",
					"value": "Get Payment Information Sepa Separate Payment By Employment ID",
					"action": "Get a list of payment information SEPA separate payment records",
					"description": "__Activity name :__ GetPaymentInformationSepaSeparatePaymentByEmploymentId\n\nGet a list of records that indicate, if applicable, the bank account(s) (i.e. IBAN's) where a given amount of the net salary for this employment will be paid to.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/paymentinformationsepaseparatepayments"
						}
					}
				},
				{
					"name": "Post Payment Information Sepa Separate Payment By Employment ID",
					"value": "Post Payment Information Sepa Separate Payment By Employment ID",
					"action": "Create a new payment information SEPA separate payment record",
					"description": "__Activity name :__ PostPaymentInformationSepaSeparatePaymentByEmploymentId\n\nCreate a new payment information SEPA separate payment record for an employment.<br/>\n\n__Metadata :__ Not applicable for this resource.\n\n__Defaults :__ Default values for a new object can be acquired by adding `/defaults' to the POST URL.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/paymentinformationsepaseparatepayments"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /providers/employers/employees/employments/paymentinformationsepaseparatepayments/{paymentInformationSepaSeparatePaymentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Information Separate Payments"
					],
					"operation": [
						"Delete Payment Information Sepa Separate Payment By Payment Information Sepa Separate Payment ID"
					]
				}
			}
		},
		{
			"displayName": "Payment Information Sepa Separate Payment ID",
			"name": "paymentInformationSepaSeparatePaymentId",
			"required": true,
			"description": "The unique identifier of the SEPA payment record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Information Separate Payments"
					],
					"operation": [
						"Delete Payment Information Sepa Separate Payment By Payment Information Sepa Separate Payment ID"
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
						"Payment Information Separate Payments"
					],
					"operation": [
						"Delete Payment Information Sepa Separate Payment By Payment Information Sepa Separate Payment ID"
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
						"Payment Information Separate Payments"
					],
					"operation": [
						"Delete Payment Information Sepa Separate Payment By Payment Information Sepa Separate Payment ID"
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
						"Payment Information Separate Payments"
					],
					"operation": [
						"Delete Payment Information Sepa Separate Payment By Payment Information Sepa Separate Payment ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/paymentinformationsepaseparatepayments/{paymentInformationSepaSeparatePaymentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Information Separate Payments"
					],
					"operation": [
						"Get Payment Information Sepa Separate Payment By Payment Information Sepa Separate Payment ID"
					]
				}
			}
		},
		{
			"displayName": "Payment Information Sepa Separate Payment ID",
			"name": "paymentInformationSepaSeparatePaymentId",
			"required": true,
			"description": "The unique identifier of the SEPA payment record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Information Separate Payments"
					],
					"operation": [
						"Get Payment Information Sepa Separate Payment By Payment Information Sepa Separate Payment ID"
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
						"Payment Information Separate Payments"
					],
					"operation": [
						"Get Payment Information Sepa Separate Payment By Payment Information Sepa Separate Payment ID"
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
						"Payment Information Separate Payments"
					],
					"operation": [
						"Get Payment Information Sepa Separate Payment By Payment Information Sepa Separate Payment ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/employees/employments/paymentinformationsepaseparatepayments/{paymentInformationSepaSeparatePaymentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Information Separate Payments"
					],
					"operation": [
						"Put Payment Information Sepa Separate Payment By Payment Information Sepa Separate Payment ID"
					]
				}
			}
		},
		{
			"displayName": "Payment Information Sepa Separate Payment ID",
			"name": "paymentInformationSepaSeparatePaymentId",
			"required": true,
			"description": "The unique identifier of the SEPA payment record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Information Separate Payments"
					],
					"operation": [
						"Put Payment Information Sepa Separate Payment By Payment Information Sepa Separate Payment ID"
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
						"Payment Information Separate Payments"
					],
					"operation": [
						"Put Payment Information Sepa Separate Payment By Payment Information Sepa Separate Payment ID"
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
						"Payment Information Separate Payments"
					],
					"operation": [
						"Put Payment Information Sepa Separate Payment By Payment Information Sepa Separate Payment ID"
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
						"Payment Information Separate Payments"
					],
					"operation": [
						"Put Payment Information Sepa Separate Payment By Payment Information Sepa Separate Payment ID"
					]
				}
			}
		},
		{
			"displayName": "Amount",
			"name": "amount",
			"type": "number",
			"default": 32,
			"description": "The amount to be split from the net salary",
			"routing": {
				"send": {
					"property": "amount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Information Separate Payments"
					],
					"operation": [
						"Put Payment Information Sepa Separate Payment By Payment Information Sepa Separate Payment ID"
					]
				}
			}
		},
		{
			"displayName": "City Beneficiary",
			"name": "cityBeneficiary",
			"type": "string",
			"default": "Rome",
			"description": "City name of beneficiary\n",
			"routing": {
				"send": {
					"property": "cityBeneficiary",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Information Separate Payments"
					],
					"operation": [
						"Put Payment Information Sepa Separate Payment By Payment Information Sepa Separate Payment ID"
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
						"Payment Information Separate Payments"
					],
					"operation": [
						"Put Payment Information Sepa Separate Payment By Payment Information Sepa Separate Payment ID"
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
						"Payment Information Separate Payments"
					],
					"operation": [
						"Put Payment Information Sepa Separate Payment By Payment Information Sepa Separate Payment ID"
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
						"Payment Information Separate Payments"
					],
					"operation": [
						"Put Payment Information Sepa Separate Payment By Payment Information Sepa Separate Payment ID"
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
						"Payment Information Separate Payments"
					],
					"operation": [
						"Put Payment Information Sepa Separate Payment By Payment Information Sepa Separate Payment ID"
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
						"Payment Information Separate Payments"
					],
					"operation": [
						"Put Payment Information Sepa Separate Payment By Payment Information Sepa Separate Payment ID"
					]
				}
			}
		},
		{
			"displayName": "Name Beneficiary",
			"name": "nameBeneficiary",
			"type": "string",
			"default": "Ben Hur",
			"description": "Name of beneficiary\n",
			"routing": {
				"send": {
					"property": "nameBeneficiary",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Information Separate Payments"
					],
					"operation": [
						"Put Payment Information Sepa Separate Payment By Payment Information Sepa Separate Payment ID"
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
						"Payment Information Separate Payments"
					],
					"operation": [
						"Put Payment Information Sepa Separate Payment By Payment Information Sepa Separate Payment ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/{employmentId}/paymentinformationsepaseparatepayments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Information Separate Payments"
					],
					"operation": [
						"Get Payment Information Sepa Separate Payment By Employment ID"
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
						"Payment Information Separate Payments"
					],
					"operation": [
						"Get Payment Information Sepa Separate Payment By Employment ID"
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
						"Payment Information Separate Payments"
					],
					"operation": [
						"Get Payment Information Sepa Separate Payment By Employment ID"
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
						"Payment Information Separate Payments"
					],
					"operation": [
						"Get Payment Information Sepa Separate Payment By Employment ID"
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
						"Payment Information Separate Payments"
					],
					"operation": [
						"Get Payment Information Sepa Separate Payment By Employment ID"
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
						"Payment Information Separate Payments"
					],
					"operation": [
						"Get Payment Information Sepa Separate Payment By Employment ID"
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
						"Payment Information Separate Payments"
					],
					"operation": [
						"Get Payment Information Sepa Separate Payment By Employment ID"
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
						"Payment Information Separate Payments"
					],
					"operation": [
						"Get Payment Information Sepa Separate Payment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/employees/employments/{employmentId}/paymentinformationsepaseparatepayments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Information Separate Payments"
					],
					"operation": [
						"Post Payment Information Sepa Separate Payment By Employment ID"
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
						"Payment Information Separate Payments"
					],
					"operation": [
						"Post Payment Information Sepa Separate Payment By Employment ID"
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
						"Payment Information Separate Payments"
					],
					"operation": [
						"Post Payment Information Sepa Separate Payment By Employment ID"
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
						"Payment Information Separate Payments"
					],
					"operation": [
						"Post Payment Information Sepa Separate Payment By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/employees/employments/{employmentId}/paymentinformationsepaseparatepayments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Information Separate Payments"
					],
					"operation": [
						"Post Payment Information Sepa Separate Payment By Employment ID"
					]
				}
			}
		},
];
