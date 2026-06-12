import type { INodeProperties } from 'n8n-workflow';

export const absenceProgressDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Absence Progress"
					]
				}
			},
			"options": [
				{
					"name": "Delete Absence Progress By Absence Progress ID",
					"value": "Delete Absence Progress By Absence Progress ID",
					"action": "Delete a specific Absence Progress record",
					"description": "__Activity name :__ DeleteAbsenceProgressByAbsenceProgressId\n\nDelete an existing Absence Progress (for an employee). There always has to remain one record of absence progress for an absence. This last record is removed when the absence is deleted.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/employees/absences/absenceprogress/{{$parameter[\"absenceProgressId\"]}}"
						}
					}
				},
				{
					"name": "Get Absence Progress By Absence Progress ID",
					"value": "Get Absence Progress By Absence Progress ID",
					"action": "Details of an Absence Progress",
					"description": "__Activity name :__ GetAbsenceProgressByAbsenceProgressId\n\nGet the details of an Absence Progress        \n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/absences/absenceprogress/{{$parameter[\"absenceProgressId\"]}}"
						}
					}
				},
				{
					"name": "Put Absence Progress By Absence Progress",
					"value": "Put Absence Progress By Absence Progress",
					"action": "Edit the details of an absence progress",
					"description": "__Activity name :__ PutAbsenceProgressByAbsenceProgressId\n\n__Metadata :__  Possible options for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the PUT URL.\n\nEdit the details of an absence progress\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/employees/absences/absenceprogress/{{$parameter[\"absenceProgressId\"]}}"
						}
					}
				},
				{
					"name": "Get Absence Progress By Absence ID",
					"value": "Get Absence Progress By Absence ID",
					"action": "List of absence progress for an absence",
					"description": "__Activity name :__ GetAbsenceProgressByAbsenceId\n\nGet a list of absence progress (verzuimverloop) for a specific absence (verzuimmelding).\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/absences/{{$parameter[\"absenceId\"]}}/absenceprogress"
						}
					}
				},
				{
					"name": "Post Absence Progress By Absence ID",
					"value": "Post Absence Progress By Absence ID",
					"action": "Create an Absence Progress for an Absence",
					"description": "__Activity name :__ PostAbsenceProgressByAbsenceId\n\n__Metadata :__  Possible options for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the POST URL.\n\n__Defaults :__ Default values for a new object can be acquired by adding `/defaults' to the POST URL. \n\nAdd an Absence Progress (=Ziekteverloop) for an employee. As is common with closed chain entities, the endDate of the previous record will be filled depending on the startDate of the new one.\n\nPractically this means that a full recovery notification has been performed. \n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/employees/absences/{{$parameter[\"absenceId\"]}}/absenceprogress"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /providers/employers/employees/absences/absenceprogress/{absenceProgressId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Absence Progress"
					],
					"operation": [
						"Delete Absence Progress By Absence Progress ID"
					]
				}
			}
		},
		{
			"displayName": "Absence Progress ID",
			"name": "absenceProgressId",
			"required": true,
			"description": "The unique identifier of an absence progress",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Absence Progress"
					],
					"operation": [
						"Delete Absence Progress By Absence Progress ID"
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
						"Absence Progress"
					],
					"operation": [
						"Delete Absence Progress By Absence Progress ID"
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
						"Absence Progress"
					],
					"operation": [
						"Delete Absence Progress By Absence Progress ID"
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
						"Absence Progress"
					],
					"operation": [
						"Delete Absence Progress By Absence Progress ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/absences/absenceprogress/{absenceProgressId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Absence Progress"
					],
					"operation": [
						"Get Absence Progress By Absence Progress ID"
					]
				}
			}
		},
		{
			"displayName": "Absence Progress ID",
			"name": "absenceProgressId",
			"required": true,
			"description": "The unique identifier of an absence progress",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Absence Progress"
					],
					"operation": [
						"Get Absence Progress By Absence Progress ID"
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
						"Absence Progress"
					],
					"operation": [
						"Get Absence Progress By Absence Progress ID"
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
						"Absence Progress"
					],
					"operation": [
						"Get Absence Progress By Absence Progress ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/employees/absences/absenceprogress/{absenceProgressId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Absence Progress"
					],
					"operation": [
						"Put Absence Progress By Absence Progress"
					]
				}
			}
		},
		{
			"displayName": "Absence Progress ID",
			"name": "absenceProgressId",
			"required": true,
			"description": "The unique identifier of an absence progress",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Absence Progress"
					],
					"operation": [
						"Put Absence Progress By Absence Progress"
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
						"Absence Progress"
					],
					"operation": [
						"Put Absence Progress By Absence Progress"
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
						"Absence Progress"
					],
					"operation": [
						"Put Absence Progress By Absence Progress"
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
						"Absence Progress"
					],
					"operation": [
						"Put Absence Progress By Absence Progress"
					]
				}
			}
		},
		{
			"displayName": "Comments",
			"name": "comments",
			"type": "string",
			"default": "Lorem ipsum dolor sit amet, id nibh adhuc omnium vix, ne nec eius inani aliquip.",
			"description": "Free text field to register any relevant information.",
			"routing": {
				"send": {
					"property": "comments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Absence Progress"
					],
					"operation": [
						"Put Absence Progress By Absence Progress"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"type": "string",
			"default": "",
			"description": "The last day that the `incapacityPercentage` is active.<br/>\n",
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
						"Absence Progress"
					],
					"operation": [
						"Put Absence Progress By Absence Progress"
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
						"Absence Progress"
					],
					"operation": [
						"Put Absence Progress By Absence Progress"
					]
				}
			}
		},
		{
			"displayName": "Incapacity Percentage",
			"name": "incapacityPercentage",
			"type": "number",
			"default": 100,
			"description": "percentage of not being able to work",
			"routing": {
				"send": {
					"property": "incapacityPercentage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Absence Progress"
					],
					"operation": [
						"Put Absence Progress By Absence Progress"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "2018-01-21",
			"description": "start dat of the incapacityPercentage",
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
						"Absence Progress"
					],
					"operation": [
						"Put Absence Progress By Absence Progress"
					]
				}
			}
		},
		{
			"displayName": "Type Of Work Resumption",
			"name": "typeOfWorkResumption",
			"type": "json",
			"default": "{\n  \"key\": 2,\n  \"value\": \"Eigen werk met aanpassing\"\n}",
			"description": "The type of work the work the employee is fulfilling when partly returning to work.",
			"routing": {
				"send": {
					"property": "typeOfWorkResumption",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Absence Progress"
					],
					"operation": [
						"Put Absence Progress By Absence Progress"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/absences/{absenceId}/absenceprogress",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Absence Progress"
					],
					"operation": [
						"Get Absence Progress By Absence ID"
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
						"Absence Progress"
					],
					"operation": [
						"Get Absence Progress By Absence ID"
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
						"Absence Progress"
					],
					"operation": [
						"Get Absence Progress By Absence ID"
					]
				}
			}
		},
		{
			"displayName": "Absence ID",
			"name": "absenceId",
			"required": true,
			"description": "The unique identifier of an absence",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Absence Progress"
					],
					"operation": [
						"Get Absence Progress By Absence ID"
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
						"Absence Progress"
					],
					"operation": [
						"Get Absence Progress By Absence ID"
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
						"Absence Progress"
					],
					"operation": [
						"Get Absence Progress By Absence ID"
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
						"Absence Progress"
					],
					"operation": [
						"Get Absence Progress By Absence ID"
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
						"Absence Progress"
					],
					"operation": [
						"Get Absence Progress By Absence ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/employees/absences/{absenceId}/absenceprogress",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Absence Progress"
					],
					"operation": [
						"Post Absence Progress By Absence ID"
					]
				}
			}
		},
		{
			"displayName": "Absence ID",
			"name": "absenceId",
			"required": true,
			"description": "The unique identifier of an absence",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Absence Progress"
					],
					"operation": [
						"Post Absence Progress By Absence ID"
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
						"Absence Progress"
					],
					"operation": [
						"Post Absence Progress By Absence ID"
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
						"Absence Progress"
					],
					"operation": [
						"Post Absence Progress By Absence ID"
					]
				}
			}
		},
		{
			"displayName": "Comments",
			"name": "comments",
			"type": "string",
			"default": "Lorem ipsum dolor sit amet, id nibh adhuc omnium vix, ne nec eius inani aliquip.",
			"description": "Free text field to register any relevant information.",
			"routing": {
				"send": {
					"property": "comments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Absence Progress"
					],
					"operation": [
						"Post Absence Progress By Absence ID"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"type": "string",
			"default": "",
			"description": "The last day that the `incapacityPercentage` is active.<br/>\n",
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
						"Absence Progress"
					],
					"operation": [
						"Post Absence Progress By Absence ID"
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
						"Absence Progress"
					],
					"operation": [
						"Post Absence Progress By Absence ID"
					]
				}
			}
		},
		{
			"displayName": "Incapacity Percentage",
			"name": "incapacityPercentage",
			"type": "number",
			"default": 100,
			"description": "percentage of not being able to work",
			"routing": {
				"send": {
					"property": "incapacityPercentage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Absence Progress"
					],
					"operation": [
						"Post Absence Progress By Absence ID"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "2018-01-21",
			"description": "start dat of the incapacityPercentage",
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
						"Absence Progress"
					],
					"operation": [
						"Post Absence Progress By Absence ID"
					]
				}
			}
		},
		{
			"displayName": "Type Of Work Resumption",
			"name": "typeOfWorkResumption",
			"type": "json",
			"default": "{\n  \"key\": 2,\n  \"value\": \"Eigen werk met aanpassing\"\n}",
			"description": "The type of work the work the employee is fulfilling when partly returning to work.",
			"routing": {
				"send": {
					"property": "typeOfWorkResumption",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Absence Progress"
					],
					"operation": [
						"Post Absence Progress By Absence ID"
					]
				}
			}
		},
];
