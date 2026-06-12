import type { INodeProperties } from 'n8n-workflow';

export const payrollPeriodDataDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Period Data"
					]
				}
			},
			"options": [
				{
					"name": "Delete Payroll Period Data By Payroll Period Data ID",
					"value": "Delete Payroll Period Data By Payroll Period Data ID",
					"action": "Delete a specific payroll period data record",
					"description": "__Activity name:__ DeletePayrollPeriodDataByPayrollPeriodDataId\n\nDelete a payroll period data record for the employment\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/employees/employments/payrollperioddata/{{$parameter[\"payrollperioddataId\"]}}"
						}
					}
				},
				{
					"name": "Get Payroll Period Data By Payroll Period Data ID",
					"value": "Get Payroll Period Data By Payroll Period Data ID",
					"action": "Details of a payroll period data",
					"description": "__Activity name :__ GetPayrollPeriodDataByPayrollPeriodDataId <br/> <br/>         Get the details of payroll period data\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/payrollperioddata/{{$parameter[\"payrollperioddataId\"]}}"
						}
					}
				},
				{
					"name": "Put Payroll Period Data By Payroll Period Data ID",
					"value": "Put Payroll Period Data By Payroll Period Data ID",
					"action": "Edit the details of an payroll period data",
					"description": "__Activity name :__ PutPayrollPeriodDataByPayrollPeriodDataId <br/> <br/>         Edit the details for payroll period data <br/> <br/> __Metadata :__ <br/> Possible values for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the PUT URL <br/> Possible values for fields of the type 'metadata' that are PERIOD-specific can be acquired (GET) by adding `/metadata/year/{year}/period/{periodNumber}` to the PUT URL     <br/>\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/employees/employments/payrollperioddata/{{$parameter[\"payrollperioddataId\"]}}"
						}
					}
				},
				{
					"name": "Get Payroll Period Data By Employment ID",
					"value": "Get Payroll Period Data By Employment ID",
					"action": "list of payroll period data",
					"description": "__Activity name :__ GetPayrollPeriodDataByEmploymentId <br/> <br/> Get a list of all payroll period data for an employment. Payroll period data relates to a single payroll period.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/payrollperioddata"
						}
					}
				},
				{
					"name": "Patch Payroll Period Data By Employment ID",
					"value": "Patch Payroll Period Data By Employment ID",
					"action": "Insert or update payroll period data",
					"description": "**This endpoint is the REST alternative to the ImporteerGegevens (Variabele Gegevens) SOAP webservice functionality**  <br/> <br/> __Activity name :__ PatchPayrollPeriodDataByEmploymentId <br/> <br/>         This endpoint is typically used by applications that are considered to be leading in regard to the values for the payroll components they manage. For most (external) applications this will the most viable endpoint to achieve that functionality. Loket considers these parties as not interested in the current state of the payroll period data in the Loket.nl database. This endpoint is provided to make these scenarios easier to implement since no GET call is required to determine whether a POST or PUT call is to be performed to either insert or update payroll period data.\nBased on the current state of the database Loket.nl will either insert a new record or update the existing record with the supplied data.\n* A new record is created when the combination of `payrollPeriod`, `shift`, `payslipType`, `distributionUnit`, `costCenter` and `costUnit` is valid and _does not_ exist for the employment. Next to that, the objects consisting of `payrollComponent`, `value` and `attribute` are inserted into the database. <br />\n* An update is performed when the combination of `payrollPeriod`, `shift`, `payslipType`, `distributionUnit`, `costCenter` and `costUnit` _does_ exist for the employment. In that case the specified objects consisting of `payrollComponent`, `value` and `attribute` are inserted into the database, overwriting existing values. Existing records with a `payrollComponent.key` that is not supplied in the request are not modified. <br/> <br/> __Metadata :__ <br/> Possible values for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the PATCH URL <br/> Possible values for fields of the type 'metadata' that are PERIOD-specific can be acquired (GET) by adding `/metadata/year/{year}/period/{periodNumber}` to the PATCH URL     <br/> <br/>   __Default values :__ <br/> Default values may be acquired by adding `/defaults` (GET) to the PATCH url . It is very much (!!!) recommended to acquire the defaults-objects first and use that information when inserting data for this employment. I.e. use the default values for costCenter, shift etcetera and the complement the object with the payroll components you want to provide. <br/> <br/>      __Extra background reading :__ <br/> It may be useful to read more about payroll period data (variabele gegevens, mutaties) on the Loket.nl [helpdesk portal](https://helpdesk.loket.nl/hc/nl/articles/115003667669-Variabele-mutaties-Individuele-vastlegging). Please note that this information is in Dutch and access is required. <br/>\n",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/payrollperioddata"
						}
					}
				},
				{
					"name": "Post Payroll Period Data By Employment ID",
					"value": "Post Payroll Period Data By Employment ID",
					"action": "Create an payroll period data record for an employment",
					"description": "__Activity name :__ PostPayrollPeriodDataByEmploymentId <br/> <br/>         Create a payroll period date record for an employment <br/> <br/> __Metadata :__ <br/> Possible values for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the POST URL <br/> Possible values for fields of the type 'metadata' that are PERIOD-specific can be acquired (GET) by adding `/metadata/year/{year}/period/{periodNumber}` to the POST URL <br/> __Default values :__ <br/> * Default values may be acquired by adding `/defaults` (GET) to the POST url\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/payrollperioddata"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /providers/employers/employees/employments/payrollperioddata/{payrollperioddataId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Period Data"
					],
					"operation": [
						"Delete Payroll Period Data By Payroll Period Data ID"
					]
				}
			}
		},
		{
			"displayName": "Payrollperioddata ID",
			"name": "payrollperioddataId",
			"required": true,
			"description": "The unique identifier of the payroll period data",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Period Data"
					],
					"operation": [
						"Delete Payroll Period Data By Payroll Period Data ID"
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
						"Payroll Period Data"
					],
					"operation": [
						"Delete Payroll Period Data By Payroll Period Data ID"
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
						"Payroll Period Data"
					],
					"operation": [
						"Delete Payroll Period Data By Payroll Period Data ID"
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
						"Payroll Period Data"
					],
					"operation": [
						"Delete Payroll Period Data By Payroll Period Data ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/payrollperioddata/{payrollperioddataId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Period Data"
					],
					"operation": [
						"Get Payroll Period Data By Payroll Period Data ID"
					]
				}
			}
		},
		{
			"displayName": "Payrollperioddata ID",
			"name": "payrollperioddataId",
			"required": true,
			"description": "The unique identifier of the payroll period data",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Period Data"
					],
					"operation": [
						"Get Payroll Period Data By Payroll Period Data ID"
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
						"Payroll Period Data"
					],
					"operation": [
						"Get Payroll Period Data By Payroll Period Data ID"
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
						"Payroll Period Data"
					],
					"operation": [
						"Get Payroll Period Data By Payroll Period Data ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/employees/employments/payrollperioddata/{payrollperioddataId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Period Data"
					],
					"operation": [
						"Put Payroll Period Data By Payroll Period Data ID"
					]
				}
			}
		},
		{
			"displayName": "Payrollperioddata ID",
			"name": "payrollperioddataId",
			"required": true,
			"description": "The unique identifier of the payroll period data",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Period Data"
					],
					"operation": [
						"Put Payroll Period Data By Payroll Period Data ID"
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
						"Payroll Period Data"
					],
					"operation": [
						"Put Payroll Period Data By Payroll Period Data ID"
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
						"Payroll Period Data"
					],
					"operation": [
						"Put Payroll Period Data By Payroll Period Data ID"
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
						"Payroll Period Data"
					],
					"operation": [
						"Put Payroll Period Data By Payroll Period Data ID"
					]
				}
			}
		},
		{
			"displayName": "Cost Center",
			"name": "costCenter",
			"type": "json",
			"default": "{\n  \"code\": \"SAL073\",\n  \"description\": \"Sales Den Bosch\",\n  \"key\": 2\n}",
			"description": "The cost center on which the payroll period data for this record will be booked for the ledger.\n",
			"routing": {
				"send": {
					"property": "costCenter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Period Data"
					],
					"operation": [
						"Put Payroll Period Data By Payroll Period Data ID"
					]
				}
			}
		},
		{
			"displayName": "Cost Unit",
			"name": "costUnit",
			"type": "json",
			"default": "{\n  \"code\": \"01\",\n  \"description\": \"Cars\",\n  \"key\": 2\n}",
			"description": "The cost unit on which the data for this record will be booked for the ledger\n",
			"routing": {
				"send": {
					"property": "costUnit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Period Data"
					],
					"operation": [
						"Put Payroll Period Data By Payroll Period Data ID"
					]
				}
			}
		},
		{
			"displayName": "Distribution Unit",
			"name": "distributionUnit",
			"type": "json",
			"default": "{\n  \"code\": 2,\n  \"description\": \"Sales\",\n  \"key\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\"\n}",
			"description": "Distribution unit, used in several reports and the \"basic wage journal\" functionality. Commonly used as a cost center.\n",
			"routing": {
				"send": {
					"property": "distributionUnit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Period Data"
					],
					"operation": [
						"Put Payroll Period Data By Payroll Period Data ID"
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
						"Payroll Period Data"
					],
					"operation": [
						"Put Payroll Period Data By Payroll Period Data ID"
					]
				}
			}
		},
		{
			"displayName": "Payroll Components",
			"name": "payrollComponents",
			"type": "json",
			"default": "[\n  {\n    \"isSupplement\": false,\n    \"payrollComponent\": {\n      \"canBeSupplemented\": false,\n      \"category\": {\n        \"key\": 1,\n        \"value\": \"Uren\"\n      },\n      \"deductionOrPayment\": {\n        \"key\": 2,\n        \"value\": \"Betaling\"\n      },\n      \"description\": \"Uren gewerkt\",\n      \"key\": 1\n    },\n    \"value\": 144\n  }\n]",
			"routing": {
				"send": {
					"property": "payrollComponents",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Period Data"
					],
					"operation": [
						"Put Payroll Period Data By Payroll Period Data ID"
					]
				}
			}
		},
		{
			"displayName": "Payroll Period",
			"name": "payrollPeriod",
			"type": "json",
			"default": "{\n  \"periodEndDate\": \"2018-01-31\",\n  \"periodNumber\": 1,\n  \"periodStartDate\": \"2018-01-01\",\n  \"year\": 2017\n}",
			"routing": {
				"send": {
					"property": "payrollPeriod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Period Data"
					],
					"operation": [
						"Put Payroll Period Data By Payroll Period Data ID"
					]
				}
			}
		},
		{
			"displayName": "Payslip Text",
			"name": "payslipText",
			"type": "string",
			"default": "Additional payslip for bonus",
			"description": "A custom text to be displayed on the payslip.\n",
			"routing": {
				"send": {
					"property": "payslipText",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Period Data"
					],
					"operation": [
						"Put Payroll Period Data By Payroll Period Data ID"
					]
				}
			}
		},
		{
			"displayName": "Payslip Type",
			"name": "payslipType",
			"type": "json",
			"default": "{\n  \"key\": 2,\n  \"value\": \"Bijzonder tarief strook\"\n}",
			"description": "The type of payslip (as defined by the Dutch tax authorities)\n",
			"routing": {
				"send": {
					"property": "payslipType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Period Data"
					],
					"operation": [
						"Put Payroll Period Data By Payroll Period Data ID"
					]
				}
			}
		},
		{
			"displayName": "Shift",
			"name": "shift",
			"type": "json",
			"default": "{\n  \"bonusPercentage\": 12,\n  \"fullTimeHoursPerWeek\": 40,\n  \"shiftNumber\": 1\n}",
			"description": "The shift determines the full-time hours and bonus percentage.\n",
			"routing": {
				"send": {
					"property": "shift",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Period Data"
					],
					"operation": [
						"Put Payroll Period Data By Payroll Period Data ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/{employmentId}/payrollperioddata",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Period Data"
					],
					"operation": [
						"Get Payroll Period Data By Employment ID"
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
						"Payroll Period Data"
					],
					"operation": [
						"Get Payroll Period Data By Employment ID"
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
						"Payroll Period Data"
					],
					"operation": [
						"Get Payroll Period Data By Employment ID"
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
						"Payroll Period Data"
					],
					"operation": [
						"Get Payroll Period Data By Employment ID"
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
						"Payroll Period Data"
					],
					"operation": [
						"Get Payroll Period Data By Employment ID"
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
						"Payroll Period Data"
					],
					"operation": [
						"Get Payroll Period Data By Employment ID"
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
						"Payroll Period Data"
					],
					"operation": [
						"Get Payroll Period Data By Employment ID"
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
						"Payroll Period Data"
					],
					"operation": [
						"Get Payroll Period Data By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "PATCH /providers/employers/employees/employments/{employmentId}/payrollperioddata",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Period Data"
					],
					"operation": [
						"Patch Payroll Period Data By Employment ID"
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
						"Payroll Period Data"
					],
					"operation": [
						"Patch Payroll Period Data By Employment ID"
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
						"Payroll Period Data"
					],
					"operation": [
						"Patch Payroll Period Data By Employment ID"
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
						"Payroll Period Data"
					],
					"operation": [
						"Patch Payroll Period Data By Employment ID"
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
						"Payroll Period Data"
					],
					"operation": [
						"Patch Payroll Period Data By Employment ID"
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
						"Payroll Period Data"
					],
					"operation": [
						"Patch Payroll Period Data By Employment ID"
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
						"Payroll Period Data"
					],
					"operation": [
						"Patch Payroll Period Data By Employment ID"
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
						"Payroll Period Data"
					],
					"operation": [
						"Patch Payroll Period Data By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Cost Center",
			"name": "costCenter",
			"type": "json",
			"default": "{\n  \"code\": \"SAL073\",\n  \"description\": \"Sales Den Bosch\",\n  \"key\": 2\n}",
			"description": "The cost center on which the payroll period data for this record will be booked for the ledger.\n",
			"routing": {
				"send": {
					"property": "costCenter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Period Data"
					],
					"operation": [
						"Patch Payroll Period Data By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Cost Unit",
			"name": "costUnit",
			"type": "json",
			"default": "{\n  \"code\": \"01\",\n  \"description\": \"Cars\",\n  \"key\": 2\n}",
			"description": "The cost unit on which the data for this record will be booked for the ledger\n",
			"routing": {
				"send": {
					"property": "costUnit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Period Data"
					],
					"operation": [
						"Patch Payroll Period Data By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Distribution Unit",
			"name": "distributionUnit",
			"type": "json",
			"default": "{\n  \"code\": 2,\n  \"description\": \"Sales\",\n  \"key\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\"\n}",
			"description": "Distribution unit (verdelingseenheid), used in several reports and the \"basic wage journal\" functionality. Commonly used as a cost center.\n",
			"routing": {
				"send": {
					"property": "distributionUnit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Period Data"
					],
					"operation": [
						"Patch Payroll Period Data By Employment ID"
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
						"Payroll Period Data"
					],
					"operation": [
						"Patch Payroll Period Data By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Payroll Components",
			"name": "payrollComponents",
			"type": "json",
			"default": "[\n  {\n    \"isSupplement\": false,\n    \"payrollComponent\": {\n      \"canBeSupplemented\": false,\n      \"category\": {\n        \"key\": 1,\n        \"value\": \"Uren\"\n      },\n      \"deductionOrPayment\": {\n        \"key\": 2,\n        \"value\": \"Betaling\"\n      },\n      \"description\": \"Uren gewerkt\",\n      \"key\": 1\n    },\n    \"value\": 144\n  }\n]",
			"routing": {
				"send": {
					"property": "payrollComponents",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Period Data"
					],
					"operation": [
						"Patch Payroll Period Data By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Payroll Period",
			"name": "payrollPeriod",
			"type": "json",
			"default": "{\n  \"periodEndDate\": \"2018-01-31\",\n  \"periodNumber\": 1,\n  \"periodStartDate\": \"2018-01-01\",\n  \"year\": 2017\n}",
			"routing": {
				"send": {
					"property": "payrollPeriod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Period Data"
					],
					"operation": [
						"Patch Payroll Period Data By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Payslip Text",
			"name": "payslipText",
			"type": "string",
			"default": "Additional payslip for bonus",
			"description": "A custom text to be displayed on the payslip.\n",
			"routing": {
				"send": {
					"property": "payslipText",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Period Data"
					],
					"operation": [
						"Patch Payroll Period Data By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Payslip Type",
			"name": "payslipType",
			"type": "json",
			"default": "{\n  \"key\": 2,\n  \"value\": \"Bijzonder tarief strook\"\n}",
			"description": "The type of payslip (as defined by the Dutch tax authorities)\n",
			"routing": {
				"send": {
					"property": "payslipType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Period Data"
					],
					"operation": [
						"Patch Payroll Period Data By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Shift",
			"name": "shift",
			"type": "json",
			"default": "{\n  \"bonusPercentage\": 12,\n  \"fullTimeHoursPerWeek\": 40,\n  \"shiftNumber\": 1\n}",
			"description": "The shift determines the full-time hours and bonus percentage.\n",
			"routing": {
				"send": {
					"property": "shift",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Period Data"
					],
					"operation": [
						"Patch Payroll Period Data By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/employees/employments/{employmentId}/payrollperioddata",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Period Data"
					],
					"operation": [
						"Post Payroll Period Data By Employment ID"
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
						"Payroll Period Data"
					],
					"operation": [
						"Post Payroll Period Data By Employment ID"
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
						"Payroll Period Data"
					],
					"operation": [
						"Post Payroll Period Data By Employment ID"
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
						"Payroll Period Data"
					],
					"operation": [
						"Post Payroll Period Data By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Cost Center",
			"name": "costCenter",
			"type": "json",
			"default": "{\n  \"code\": \"SAL073\",\n  \"description\": \"Sales Den Bosch\",\n  \"key\": 2\n}",
			"description": "The cost center on which the payroll period data for this record will be booked for the ledger.\n\n`costCenter` is a metadata field within the payroll administration context. Possible values can be managed by the user.\n",
			"routing": {
				"send": {
					"property": "costCenter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Period Data"
					],
					"operation": [
						"Post Payroll Period Data By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Cost Unit",
			"name": "costUnit",
			"type": "json",
			"default": "{\n  \"code\": \"01\",\n  \"description\": \"Cars\",\n  \"key\": 2\n}",
			"description": "The cost unit on which the data for this record will be booked for the ledger\n\n`costUnit` is a metadata field within the payroll administration context. Possible values can be managed by the user.\n",
			"routing": {
				"send": {
					"property": "costUnit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Period Data"
					],
					"operation": [
						"Post Payroll Period Data By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Distribution Unit",
			"name": "distributionUnit",
			"type": "json",
			"default": "{\n  \"code\": 2,\n  \"description\": \"Sales\",\n  \"key\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\"\n}",
			"description": "Distribution unit, used in several reports and the \"basic wage journal\" functionality. Commonly used as a cost center.\n\n`distributionUnit` is a metadata field within the employer context. Possible values can be managed by the user.\n",
			"routing": {
				"send": {
					"property": "distributionUnit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Period Data"
					],
					"operation": [
						"Post Payroll Period Data By Employment ID"
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
						"Payroll Period Data"
					],
					"operation": [
						"Post Payroll Period Data By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Payroll Components",
			"name": "payrollComponents",
			"type": "json",
			"default": "[\n  {\n    \"isSupplement\": false,\n    \"payrollComponent\": {\n      \"canBeSupplemented\": false,\n      \"category\": {\n        \"key\": 1,\n        \"value\": \"Uren\"\n      },\n      \"deductionOrPayment\": {\n        \"key\": 2,\n        \"value\": \"Betaling\"\n      },\n      \"key\": 1,\n      \"value\": \"Uren gewerkt\"\n    },\n    \"value\": 144\n  }\n]",
			"routing": {
				"send": {
					"property": "payrollComponents",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Period Data"
					],
					"operation": [
						"Post Payroll Period Data By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Payroll Period",
			"name": "payrollPeriod",
			"type": "json",
			"default": "{\n  \"periodEndDate\": \"2018-01-31\",\n  \"periodNumber\": 1,\n  \"periodStartDate\": \"2018-01-01\",\n  \"year\": 2017\n}",
			"routing": {
				"send": {
					"property": "payrollPeriod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Period Data"
					],
					"operation": [
						"Post Payroll Period Data By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Payslip Text",
			"name": "payslipText",
			"type": "string",
			"default": "Additional payslip for bonus",
			"description": "A custom text to be displayed on the payslip.\n",
			"routing": {
				"send": {
					"property": "payslipText",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Period Data"
					],
					"operation": [
						"Post Payroll Period Data By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Payslip Type",
			"name": "payslipType",
			"type": "json",
			"default": "{\n  \"key\": 2,\n  \"value\": \"Bijzonder tarief strook\"\n}",
			"description": "The type of payslip (as defined by the Dutch tax authorities)\n",
			"routing": {
				"send": {
					"property": "payslipType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Period Data"
					],
					"operation": [
						"Post Payroll Period Data By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Shift",
			"name": "shift",
			"type": "json",
			"default": "{\n  \"bonusPercentage\": 12,\n  \"fullTimeHoursPerWeek\": 40,\n  \"shiftNumber\": 1\n}",
			"description": "The shift determines the full-time hours and bonus percentage.\n\n`shift` is a metadata field within the payroll administration context. Possible values can be managed by the user.\n",
			"routing": {
				"send": {
					"property": "shift",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Period Data"
					],
					"operation": [
						"Post Payroll Period Data By Employment ID"
					]
				}
			}
		},
];
