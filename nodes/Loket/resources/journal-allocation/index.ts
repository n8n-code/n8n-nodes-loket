import type { INodeProperties } from 'n8n-workflow';

export const journalAllocationDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Allocation"
					]
				}
			},
			"options": [
				{
					"name": "Delete Journal Allocation By Journal Allocation ID",
					"value": "Delete Journal Allocation By Journal Allocation ID",
					"action": "Delete a specific journal allocation record",
					"description": "__Activity name:__ DeleteJournalAllocationByJournalAllocationId\n\nDelete a journal allocation record\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/employees/employments/journalallocations/{{$parameter[\"journalAllocationId\"]}}"
						}
					}
				},
				{
					"name": "Get Journal Allocation By Journal Allocation ID",
					"value": "Get Journal Allocation By Journal Allocation ID",
					"action": "Details of a journal allocation",
					"description": "__Activity name:__ GetJournalAllocationByJournalAllocationId\n\nGet the details of a financial journal allocation record (journaliseren module). \n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/journalallocations/{{$parameter[\"journalAllocationId\"]}}"
						}
					}
				},
				{
					"name": "Put Journal Allocation By Journal Allocation ID",
					"value": "Put Journal Allocation By Journal Allocation ID",
					"action": "Edit the details of a journal allocation record",
					"description": "__Activity name:__ PutJournalAllocationByJournalAllocationId\n\nEdit the details of a financial journal allocation record (journaliseren module)\n\n* Possible options for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the PUT URL.\n* Possible options dependent on a specific `startPeriod` can be acquired via `/metadata/year/{year}/period/{period}`\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/employees/employments/journalallocations/{{$parameter[\"journalAllocationId\"]}}"
						}
					}
				},
				{
					"name": "Get Journal Allocations By Employment ID",
					"value": "Get Journal Allocations By Employment ID",
					"action": "List of journal allocations for an employment",
					"description": "__Activity name:__ GetJournalAllocationsByEmploymentId\n    \n\nGet the list of financial journal allocations (journaliseren module) for an employment. \n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/journalallocations"
						}
					}
				},
				{
					"name": "Post Journal Allocation By Employment ID",
					"value": "Post Journal Allocation By Employment ID",
					"action": "Create a new journal allocation record for an employment",
					"description": "__Activity name:__ PostJournalAllocationByEmploymentId\n    \n\nCreate a new financial journal allocation record for an employment (journaliseren module).\n\n__Metadata :__ Possible options for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the POST URL. Possible options dependent on a specific `startPeriod` can be acquired via `/metadata/year/{year}/period/{period}\n\n__Defaults :__ There is NO /defaults endpoint available for this resource.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/journalallocations"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /providers/employers/employees/employments/journalallocations/{journalAllocationId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Allocation"
					],
					"operation": [
						"Delete Journal Allocation By Journal Allocation ID"
					]
				}
			}
		},
		{
			"displayName": "Journal Allocation ID",
			"name": "journalAllocationId",
			"required": true,
			"description": "The unique identifier of the journal allocation",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Allocation"
					],
					"operation": [
						"Delete Journal Allocation By Journal Allocation ID"
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
						"Journal Allocation"
					],
					"operation": [
						"Delete Journal Allocation By Journal Allocation ID"
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
						"Journal Allocation"
					],
					"operation": [
						"Delete Journal Allocation By Journal Allocation ID"
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
						"Journal Allocation"
					],
					"operation": [
						"Delete Journal Allocation By Journal Allocation ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/journalallocations/{journalAllocationId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Allocation"
					],
					"operation": [
						"Get Journal Allocation By Journal Allocation ID"
					]
				}
			}
		},
		{
			"displayName": "Journal Allocation ID",
			"name": "journalAllocationId",
			"required": true,
			"description": "The unique identifier of the journal allocation",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Allocation"
					],
					"operation": [
						"Get Journal Allocation By Journal Allocation ID"
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
						"Journal Allocation"
					],
					"operation": [
						"Get Journal Allocation By Journal Allocation ID"
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
						"Journal Allocation"
					],
					"operation": [
						"Get Journal Allocation By Journal Allocation ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/employees/employments/journalallocations/{journalAllocationId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Allocation"
					],
					"operation": [
						"Put Journal Allocation By Journal Allocation ID"
					]
				}
			}
		},
		{
			"displayName": "Journal Allocation ID",
			"name": "journalAllocationId",
			"required": true,
			"description": "The unique identifier of the journal allocation",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Allocation"
					],
					"operation": [
						"Put Journal Allocation By Journal Allocation ID"
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
						"Journal Allocation"
					],
					"operation": [
						"Put Journal Allocation By Journal Allocation ID"
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
						"Journal Allocation"
					],
					"operation": [
						"Put Journal Allocation By Journal Allocation ID"
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
						"Journal Allocation"
					],
					"operation": [
						"Put Journal Allocation By Journal Allocation ID"
					]
				}
			}
		},
		{
			"displayName": "Allocation Based On Actual Hours",
			"name": "allocationBasedOnActualHours",
			"type": "json",
			"default": "{\n  \"costCenter\": {\n    \"code\": \"SAL073\",\n    \"description\": \"Sales Den Bosch\",\n    \"key\": 2\n  },\n  \"costUnit\": {\n    \"code\": \"01\",\n    \"description\": \"Cars\",\n    \"key\": 2\n  }\n}",
			"description": "Provide the allocation details within this object in case allocation based on actual hours (=normuren) is applicable. Functional effect; when PayrollPeriodData (=Variabele Gegevens) are created for this Employment, then the default values for the fields costCenter and costUnit wil be based on the settings within this resource.  So if you are an external party and want to provide costUnit and/or costCenter when sending PayrollPeriodData,  make sure you first acquire the default values by calling the `/ defaults` for the PayrollPeriodData resource (!).\n\nPlease note that this object MUST be null when `allocationBasedOnFixedWeights` is to be applied. Only one of the two may be provided.\n",
			"routing": {
				"send": {
					"property": "allocationBasedOnActualHours",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Allocation"
					],
					"operation": [
						"Put Journal Allocation By Journal Allocation ID"
					]
				}
			}
		},
		{
			"displayName": "Allocation Based On Fixed Weights",
			"name": "allocationBasedOnFixedWeights",
			"type": "json",
			"default": "[\n  {\n    \"costCenter\": {\n      \"code\": \"SAL073\",\n      \"description\": \"Sales Den Bosch\",\n      \"key\": 2\n    },\n    \"costUnit\": {\n      \"code\": \"01\",\n      \"description\": \"Cars\",\n      \"key\": 2\n    },\n    \"weight\": 1\n  }\n]",
			"description": "Provide the allocation details within this object when allocation based on weights (=factor) is applicable. Functional effect; if the costCenter and/or costUnit are provided within this object than the journal run calculations will use these fixed weights when performing calculations. Any costCenters and costUnits in the PayrollPeriodData records will be ignored for the calculations in that case.\n\nPlease note that this object MUST be null when `allocationBasedOnActualHours` is to be applied. Only one of the two may be provided. \n",
			"routing": {
				"send": {
					"property": "allocationBasedOnFixedWeights",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Allocation"
					],
					"operation": [
						"Put Journal Allocation By Journal Allocation ID"
					]
				}
			}
		},
		{
			"displayName": "End Period",
			"name": "endPeriod",
			"type": "json",
			"default": "{\n  \"periodEndDate\": \"2018-01-31\",\n  \"periodNumber\": 1,\n  \"periodStartDate\": \"2018-01-01\",\n  \"year\": 2017\n}",
			"routing": {
				"send": {
					"property": "endPeriod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Allocation"
					],
					"operation": [
						"Put Journal Allocation By Journal Allocation ID"
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
						"Journal Allocation"
					],
					"operation": [
						"Put Journal Allocation By Journal Allocation ID"
					]
				}
			}
		},
		{
			"displayName": "Journal Profile Configuration",
			"name": "journalProfileConfiguration",
			"type": "json",
			"default": "{\n  \"endPeriod\": {\n    \"periodEndDate\": \"2017-01-31\",\n    \"periodNumber\": 1,\n    \"periodStartDate\": \"2017-01-01\",\n    \"year\": 2017\n  },\n  \"id\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\",\n  \"journalProfile\": {\n    \"key\": 2,\n    \"value\": \"General ledger supermarkets\"\n  },\n  \"startPeriod\": {\n    \"periodEndDate\": \"2017-01-31\",\n    \"periodNumber\": 1,\n    \"periodStartDate\": \"2017-01-01\",\n    \"year\": 2017\n  }\n}",
			"description": "Indicates to which journal profiel configuration the record relates",
			"routing": {
				"send": {
					"property": "journalProfileConfiguration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Allocation"
					],
					"operation": [
						"Put Journal Allocation By Journal Allocation ID"
					]
				}
			}
		},
		{
			"displayName": "Start Period",
			"name": "startPeriod",
			"type": "json",
			"default": "{\n  \"periodEndDate\": \"2018-01-31\",\n  \"periodNumber\": 1,\n  \"periodStartDate\": \"2018-01-01\",\n  \"year\": 2017\n}",
			"routing": {
				"send": {
					"property": "startPeriod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Allocation"
					],
					"operation": [
						"Put Journal Allocation By Journal Allocation ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/{employmentId}/journalallocations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Allocation"
					],
					"operation": [
						"Get Journal Allocations By Employment ID"
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
						"Journal Allocation"
					],
					"operation": [
						"Get Journal Allocations By Employment ID"
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
						"Journal Allocation"
					],
					"operation": [
						"Get Journal Allocations By Employment ID"
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
						"Journal Allocation"
					],
					"operation": [
						"Get Journal Allocations By Employment ID"
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
						"Journal Allocation"
					],
					"operation": [
						"Get Journal Allocations By Employment ID"
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
						"Journal Allocation"
					],
					"operation": [
						"Get Journal Allocations By Employment ID"
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
						"Journal Allocation"
					],
					"operation": [
						"Get Journal Allocations By Employment ID"
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
						"Journal Allocation"
					],
					"operation": [
						"Get Journal Allocations By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/employees/employments/{employmentId}/journalallocations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Allocation"
					],
					"operation": [
						"Post Journal Allocation By Employment ID"
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
						"Journal Allocation"
					],
					"operation": [
						"Post Journal Allocation By Employment ID"
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
						"Journal Allocation"
					],
					"operation": [
						"Post Journal Allocation By Employment ID"
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
						"Journal Allocation"
					],
					"operation": [
						"Post Journal Allocation By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Allocation Based On Actual Hours",
			"name": "allocationBasedOnActualHours",
			"type": "json",
			"default": "{\n  \"costCenter\": {\n    \"code\": \"SAL073\",\n    \"description\": \"Sales Den Bosch\",\n    \"key\": 2\n  },\n  \"costUnit\": {\n    \"code\": \"01\",\n    \"description\": \"Cars\",\n    \"key\": 2\n  }\n}",
			"description": "Provide the allocation details within this object in case allocation based on actual hours (=normuren) is applicable. Functional effect; when PayrollPeriodData (=Variabele Gegevens) are created for this Employment, then the default values for the fields costCenter and costUnit wil be based on the settings within this resource.  So if you are an external party and want to provide costUnit and/or costCenter when sending PayrollPeriodData,  make sure you first acquire the default values by calling the `/ defaults` for the PayrollPeriodData resource (!).\n\nPlease note that this object MUST be null when `allocationBasedOnFixedWeights` is to be applied. Only one of the two may be provided.\n",
			"routing": {
				"send": {
					"property": "allocationBasedOnActualHours",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Allocation"
					],
					"operation": [
						"Post Journal Allocation By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Allocation Based On Fixed Weights",
			"name": "allocationBasedOnFixedWeights",
			"type": "json",
			"default": "[\n  {\n    \"costCenter\": {\n      \"code\": \"SAL073\",\n      \"description\": \"Sales Den Bosch\",\n      \"key\": 2\n    },\n    \"costUnit\": {\n      \"code\": \"01\",\n      \"description\": \"Cars\",\n      \"key\": 2\n    },\n    \"weight\": 1\n  }\n]",
			"description": "Provide the allocation details within this object when allocation based on weights (=factor) is applicable. Functional effect; if the costCenter and/or costUnit are provided within this object than the journal run calculations will use these fixed weights when performing calculations. Any costCenters and costUnits in the PayrollPeriodData records will be ignored for the calculations in that case.\n\nPlease note that this object MUST be null when `allocationBasedOnActualHours` is to be applied. Only one of the two may be provided. \n",
			"routing": {
				"send": {
					"property": "allocationBasedOnFixedWeights",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Allocation"
					],
					"operation": [
						"Post Journal Allocation By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "End Period",
			"name": "endPeriod",
			"type": "json",
			"default": "{\n  \"periodEndDate\": \"2018-01-31\",\n  \"periodNumber\": 1,\n  \"periodStartDate\": \"2018-01-01\",\n  \"year\": 2017\n}",
			"routing": {
				"send": {
					"property": "endPeriod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Allocation"
					],
					"operation": [
						"Post Journal Allocation By Employment ID"
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
						"Journal Allocation"
					],
					"operation": [
						"Post Journal Allocation By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Journal Profile Configuration",
			"name": "journalProfileConfiguration",
			"type": "json",
			"default": "{\n  \"endPeriod\": {\n    \"periodEndDate\": \"2017-01-31\",\n    \"periodNumber\": 1,\n    \"periodStartDate\": \"2017-01-01\",\n    \"year\": 2017\n  },\n  \"id\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\",\n  \"journalProfile\": {\n    \"key\": 2,\n    \"value\": \"General ledger supermarkets\"\n  },\n  \"startPeriod\": {\n    \"periodEndDate\": \"2017-01-31\",\n    \"periodNumber\": 1,\n    \"periodStartDate\": \"2017-01-01\",\n    \"year\": 2017\n  }\n}",
			"description": "Indicates to which journal profiel configuration the record relates",
			"routing": {
				"send": {
					"property": "journalProfileConfiguration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Allocation"
					],
					"operation": [
						"Post Journal Allocation By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Start Period",
			"name": "startPeriod",
			"type": "json",
			"default": "{\n  \"periodEndDate\": \"2018-01-31\",\n  \"periodNumber\": 1,\n  \"periodStartDate\": \"2018-01-01\",\n  \"year\": 2017\n}",
			"routing": {
				"send": {
					"property": "startPeriod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Allocation"
					],
					"operation": [
						"Post Journal Allocation By Employment ID"
					]
				}
			}
		},
];
