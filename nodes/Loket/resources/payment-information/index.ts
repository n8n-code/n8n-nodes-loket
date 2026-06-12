import type { INodeProperties } from 'n8n-workflow';

export const paymentInformationDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Information"
					]
				}
			},
			"options": [
				{
					"name": "Delete Payment Information Sepa Bypayment Information Sepa ID",
					"value": "Delete Payment Information Sepa Bypayment Information Sepa ID",
					"action": "Delete a specific SEPA payment-record record",
					"description": "__Activity name :__ DeletePaymentInformationSepaByPaymentInformationSepaId\n\nDelete an existing SEPA payment-record (for an employment)\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/employees/employments/paymentinformationsepa/{{$parameter[\"paymentInformationSepaId\"]}}"
						}
					}
				},
				{
					"name": "Get Payment Information Sepa Bypayment Information Sepa ID",
					"value": "Get Payment Information Sepa Bypayment Information Sepa ID",
					"action": "Get the details of a payment information sepa",
					"description": "__Activity name :__ GetPaymentInformationSepaBypaymentInformationSepaId\n\nGet the detail of a payment information SEPA record.\n \nFor a specific payroll component, the record indicates to which IBAN account number it should be related for the purpose of outgoing payments.  This includes, but is not limited to, the payment of wages for an employment. For each payroll component there can only be one outgoing payment record per employment.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/paymentinformationsepa/{{$parameter[\"paymentInformationSepaId\"]}}"
						}
					}
				},
				{
					"name": "Put Payment Information Sepa By Payment Information Sepa ID",
					"value": "Put Payment Information Sepa By Payment Information Sepa ID",
					"action": "change the details of a payment information sepa",
					"description": "__Activity name :__ PutPaymentInformationSepaByPaymentInformationSepaId\n\nEdit an existing SEPA payment-record (for an employment).\nFor each unique payroll component there can only be one payment record per employment.\nPossible values for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the URL\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/employees/employments/paymentinformationsepa/{{$parameter[\"paymentInformationSepaId\"]}}"
						}
					}
				},
				{
					"name": "Get Payment Information Sepa By Employment ID",
					"value": "Get Payment Information Sepa By Employment ID",
					"action": "Get a list of payment information sepa",
					"description": "__Activity name :__ GetPaymentInformationSepaByEmploymentId\n\nGet a list of payment information for SEPA bank accounts (IBAN's) for an employment.\n \nFor a specific payroll component, the record indicates to which IBAN payments will be made. \nThis includes, but is not limited to, the payment of wages for an employment.\n \nFor each payroll component there can only be one payment information record per employment.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/paymentinformationsepa"
						}
					}
				},
				{
					"name": "Post Payment Information Sepa By Employment ID",
					"value": "Post Payment Information Sepa By Employment ID",
					"action": "create a new payment information sepa record",
					"description": "__Activity name :__ PostPaymentInformationSepaByEmploymentId\n\nCreate a new Payment information SEPA record for an employment.<br/> For each unique payroll component there can only be one payment record per employment.\n\n__Metadata :__ Possible values for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the URL\n\n__Defaults :__ Default values for a new object can be acquired by adding `/defaults' to the POST URL.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/paymentinformationsepa"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /providers/employers/employees/employments/paymentinformationsepa/{paymentInformationSepaId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Information"
					],
					"operation": [
						"Delete Payment Information Sepa Bypayment Information Sepa ID"
					]
				}
			}
		},
		{
			"displayName": "Payment Information Sepa ID",
			"name": "paymentInformationSepaId",
			"required": true,
			"description": "The unique identifier of the SEPA payment record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Information"
					],
					"operation": [
						"Delete Payment Information Sepa Bypayment Information Sepa ID"
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
						"Payment Information"
					],
					"operation": [
						"Delete Payment Information Sepa Bypayment Information Sepa ID"
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
						"Payment Information"
					],
					"operation": [
						"Delete Payment Information Sepa Bypayment Information Sepa ID"
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
						"Payment Information"
					],
					"operation": [
						"Delete Payment Information Sepa Bypayment Information Sepa ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/paymentinformationsepa/{paymentInformationSepaId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Information"
					],
					"operation": [
						"Get Payment Information Sepa Bypayment Information Sepa ID"
					]
				}
			}
		},
		{
			"displayName": "Payment Information Sepa ID",
			"name": "paymentInformationSepaId",
			"required": true,
			"description": "The unique identifier of the SEPA payment record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Information"
					],
					"operation": [
						"Get Payment Information Sepa Bypayment Information Sepa ID"
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
						"Payment Information"
					],
					"operation": [
						"Get Payment Information Sepa Bypayment Information Sepa ID"
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
						"Payment Information"
					],
					"operation": [
						"Get Payment Information Sepa Bypayment Information Sepa ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/employees/employments/paymentinformationsepa/{paymentInformationSepaId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Information"
					],
					"operation": [
						"Put Payment Information Sepa By Payment Information Sepa ID"
					]
				}
			}
		},
		{
			"displayName": "Payment Information Sepa ID",
			"name": "paymentInformationSepaId",
			"required": true,
			"description": "The unique identifier of the SEPA payment record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Information"
					],
					"operation": [
						"Put Payment Information Sepa By Payment Information Sepa ID"
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
						"Payment Information"
					],
					"operation": [
						"Put Payment Information Sepa By Payment Information Sepa ID"
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
						"Payment Information"
					],
					"operation": [
						"Put Payment Information Sepa By Payment Information Sepa ID"
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
						"Payment Information"
					],
					"operation": [
						"Put Payment Information Sepa By Payment Information Sepa ID"
					]
				}
			}
		},
		{
			"displayName": "Bic",
			"name": "bic",
			"type": "string",
			"default": "AUDFDE21",
			"description": "BIC /SWIFT code. Only applicable for a non-Dutch IBAN\n",
			"routing": {
				"send": {
					"property": "bic",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Information"
					],
					"operation": [
						"Put Payment Information Sepa By Payment Information Sepa ID"
					]
				}
			}
		},
		{
			"displayName": "City Beneficiary",
			"name": "cityBeneficiary",
			"type": "string",
			"default": "Rome",
			"description": "City name of beneficiary.\n",
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
						"Payment Information"
					],
					"operation": [
						"Put Payment Information Sepa By Payment Information Sepa ID"
					]
				}
			}
		},
		{
			"displayName": "Description 1",
			"name": "description1",
			"type": "string",
			"default": "xx",
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
						"Payment Information"
					],
					"operation": [
						"Put Payment Information Sepa By Payment Information Sepa ID"
					]
				}
			}
		},
		{
			"displayName": "Description 2",
			"name": "description2",
			"type": "string",
			"default": "x",
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
						"Payment Information"
					],
					"operation": [
						"Put Payment Information Sepa By Payment Information Sepa ID"
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
						"Payment Information"
					],
					"operation": [
						"Put Payment Information Sepa By Payment Information Sepa ID"
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
						"Payment Information"
					],
					"operation": [
						"Put Payment Information Sepa By Payment Information Sepa ID"
					]
				}
			}
		},
		{
			"displayName": "Name Beneficiary",
			"name": "nameBeneficiary",
			"type": "string",
			"default": "Ben Hur",
			"description": "Name of beneficiary.\n",
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
						"Payment Information"
					],
					"operation": [
						"Put Payment Information Sepa By Payment Information Sepa ID"
					]
				}
			}
		},
		{
			"displayName": "Payroll Component",
			"name": "payrollComponent",
			"type": "json",
			"default": "{\n  \"key\": 260,\n  \"value\": \"NETTOLOON\"\n}",
			"description": "The payroll component for which the outgoing payment records applies.\n\n`payrollComponent` is a metadata field within the payroll administration context. Possible values can be managed by the user.\n",
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
						"Payment Information"
					],
					"operation": [
						"Put Payment Information Sepa By Payment Information Sepa ID"
					]
				}
			}
		},
		{
			"displayName": "Visible On Payslip",
			"name": "visibleOnPayslip",
			"type": "boolean",
			"default": true,
			"description": "Indicates whether the payment-component is visible on a payslip.\n",
			"routing": {
				"send": {
					"property": "visibleOnPayslip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Information"
					],
					"operation": [
						"Put Payment Information Sepa By Payment Information Sepa ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/{employmentId}/paymentinformationsepa",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Information"
					],
					"operation": [
						"Get Payment Information Sepa By Employment ID"
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
						"Payment Information"
					],
					"operation": [
						"Get Payment Information Sepa By Employment ID"
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
						"Payment Information"
					],
					"operation": [
						"Get Payment Information Sepa By Employment ID"
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
						"Payment Information"
					],
					"operation": [
						"Get Payment Information Sepa By Employment ID"
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
						"Payment Information"
					],
					"operation": [
						"Get Payment Information Sepa By Employment ID"
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
						"Payment Information"
					],
					"operation": [
						"Get Payment Information Sepa By Employment ID"
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
						"Payment Information"
					],
					"operation": [
						"Get Payment Information Sepa By Employment ID"
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
						"Payment Information"
					],
					"operation": [
						"Get Payment Information Sepa By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/employees/employments/{employmentId}/paymentinformationsepa",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Information"
					],
					"operation": [
						"Post Payment Information Sepa By Employment ID"
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
						"Payment Information"
					],
					"operation": [
						"Post Payment Information Sepa By Employment ID"
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
						"Payment Information"
					],
					"operation": [
						"Post Payment Information Sepa By Employment ID"
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
						"Payment Information"
					],
					"operation": [
						"Post Payment Information Sepa By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/employees/employments/{employmentId}/paymentinformationsepa<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Information"
					],
					"operation": [
						"Post Payment Information Sepa By Employment ID"
					]
				}
			}
		},
];
