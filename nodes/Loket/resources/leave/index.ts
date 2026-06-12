import type { INodeProperties } from 'n8n-workflow';

export const leaveDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Leave"
					]
				}
			},
			"options": [
				{
					"name": "Delete Leave By Leave ID",
					"value": "Delete Leave By Leave ID",
					"action": "Delete a specific leave record",
					"description": "__Activity name :__ DeleteLeaveByLeaveId\n\nDelete an existing Leave record\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/employees/employments/leave/{{$parameter[\"leaveId\"]}}"
						}
					}
				},
				{
					"name": "Get Leave By Leave ID",
					"value": "Get Leave By Leave ID",
					"action": "A single leave entry",
					"description": "__Activity name :__ GetLeaveByLeaveId\n\nReturns one leave entry (either addition or subtraction).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/leave/{{$parameter[\"leaveId\"]}}"
						}
					}
				},
				{
					"name": "Put Leave By Leave ID",
					"value": "Put Leave By Leave ID",
					"action": "Edit the details of a leave",
					"description": "__Activity name :__ PutLeaveByLeaveId\n\nEdit the details of a leave\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/employees/employments/leave/{{$parameter[\"leaveId\"]}}"
						}
					}
				},
				{
					"name": "Get Leave Metadata By Leave ID",
					"value": "Get Leave Metadata By Leave ID",
					"action": "Get the values for the metadata fields",
					"description": "__Activity name :__ GetLeaveMetadataByLeaveId\n\nReturns the metadata values for all the metadata fields.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/leave/{{$parameter[\"leaveId\"]}}/metadata"
						}
					}
				},
				{
					"name": "Get Leave By Employment ID",
					"value": "Get Leave By Employment ID",
					"action": "List of all the leave entries",
					"description": "__Activity name :__ GetLeaveByEmploymentId <br/>  <br/>  Returns all the leave entries (both addition and subtraction) for the given employment.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/leave"
						}
					}
				},
				{
					"name": "Post Leave By Employment ID",
					"value": "Post Leave By Employment ID",
					"action": "Create a leave record for an employment",
					"description": "__Activity name :__ PostLeaveByEmploymentId\n\nAdd a Leave record for an employment\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/leave"
						}
					}
				},
				{
					"name": "Get Leave Defaults By Employment ID",
					"value": "Get Leave Defaults By Employment ID",
					"action": "Get the default values to be used when POSTing a new record",
					"description": "__Activity name :__ GetLeaveDefaultsByEmploymentId\n\nReturns the default values for all the fields. In case no default is present `null` will be returned.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/leave/defaults"
						}
					}
				},
				{
					"name": "Get Leave Metadata By Employment ID",
					"value": "Get Leave Metadata By Employment ID",
					"action": "Get the values for the metadata fields",
					"description": "__Activity name :__ GetLeaveMetadataByEmploymentId\n\nReturns the metadata values for all the metadata fields.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/leave/metadata"
						}
					}
				},
				{
					"name": "Get Leave Overview By Employment Idand Year",
					"value": "Get Leave Overview By Employment Idand Year",
					"action": "Download the leave overview for an employment and year",
					"description": "__Activity name :__ GetLeaveOverviewByEmploymentIdandYear\nDownload the leave overview for a year in a single PDF\n\n__Metadata :__ Possible options for `year` can be acquired (GET) the following URL /providers/employers/employees/employments/{employmentId}/leave/overview/metadata.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/leave/overview/{{$parameter[\"year\"]}}"
						}
					}
				},
				{
					"name": "Get Proposed Leave Hours By Employment ID",
					"value": "Get Proposed Leave Hours By Employment ID",
					"action": "Get the proposed number of leave hours for an employment",
					"description": "__Activity name :__ GetProposedLeaveHoursByEmploymentId\n\nReturns the numberOfHours (only in hours) calculated based on the employments working- hours/schedual \n\n__Note:__  The function will only work if the employment is either linked to no leave policy or linked to only leave policy(s) that use hours as the unit of leave.\n\nFurther more how the leave hours are calculated can be managed in the leave policy with the `applyLeaveSchedule` and `working hours` resource with the field `calculateUsingWorkPattern.leaveHours` The order is as follows. If calculateUsingWorkPattern.leaveHours is true the work patern from workinghours is used otherwise if applyLeaveSchedule is set to true the `leavePattern` is used otherwise the workinghours are used\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/leave/proposedleavehours"
						}
					}
				},
				{
					"name": "Get Proposed Leave Hours By Employer ID",
					"value": "Get Proposed Leave Hours By Employer ID",
					"action": "Get the proposed number of leave hours for all employments of an employer",
					"description": "__Activity name :__ GetProposedLeaveHoursByEmployerId\n\nReturns the numberOfHours (only in hours) calculated based on the employments working- hours/schedual \n\n__Note:__  The function will only work if the employment is either linked to no leave policy or linked to only leave policy(s) that use hours as the unit of leave.\n\nFurther more how the leave hours are calculated can be managed in the leave policy with the `applyLeaveSchedule` and `working hours` resource with the field `calculateUsingWorkPattern.leaveHours` The order is as follows. If calculateUsingWorkPattern.leaveHours is true the work patern from workinghours is used otherwise if applyLeaveSchedule is set to true the `leavePattern` is used otherwise the workinghours are used\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/leave/proposedleavehours"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /providers/employers/employees/employments/leave/{leaveId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave"
					],
					"operation": [
						"Delete Leave By Leave ID"
					]
				}
			}
		},
		{
			"displayName": "Leave ID",
			"name": "leaveId",
			"required": true,
			"description": "The unique identifier of the leave",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave"
					],
					"operation": [
						"Delete Leave By Leave ID"
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
						"Leave"
					],
					"operation": [
						"Delete Leave By Leave ID"
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
						"Leave"
					],
					"operation": [
						"Delete Leave By Leave ID"
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
						"Leave"
					],
					"operation": [
						"Delete Leave By Leave ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/leave/{leaveId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave"
					],
					"operation": [
						"Get Leave By Leave ID"
					]
				}
			}
		},
		{
			"displayName": "Leave ID",
			"name": "leaveId",
			"required": true,
			"description": "The unique identifier of the leave",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave"
					],
					"operation": [
						"Get Leave By Leave ID"
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
						"Leave"
					],
					"operation": [
						"Get Leave By Leave ID"
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
						"Leave"
					],
					"operation": [
						"Get Leave By Leave ID"
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
						"Leave"
					],
					"operation": [
						"Get Leave By Leave ID"
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
						"Leave"
					],
					"operation": [
						"Get Leave By Leave ID"
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
						"Leave"
					],
					"operation": [
						"Get Leave By Leave ID"
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
						"Leave"
					],
					"operation": [
						"Get Leave By Leave ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/employees/employments/leave/{leaveId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave"
					],
					"operation": [
						"Put Leave By Leave ID"
					]
				}
			}
		},
		{
			"displayName": "Leave ID",
			"name": "leaveId",
			"required": true,
			"description": "The unique identifier of the leave",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave"
					],
					"operation": [
						"Put Leave By Leave ID"
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
						"Leave"
					],
					"operation": [
						"Put Leave By Leave ID"
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
						"Leave"
					],
					"operation": [
						"Put Leave By Leave ID"
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
						"Leave"
					],
					"operation": [
						"Put Leave By Leave ID"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "comment",
			"type": "string",
			"default": "some comment",
			"routing": {
				"send": {
					"property": "comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave"
					],
					"operation": [
						"Put Leave By Leave ID"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"type": "string",
			"default": "2017-11-01",
			"description": "The end date of the leave requested (last day of the leave)",
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
						"Leave"
					],
					"operation": [
						"Put Leave By Leave ID"
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
						"Leave"
					],
					"operation": [
						"Put Leave By Leave ID"
					]
				}
			}
		},
		{
			"displayName": "Is Accrual",
			"name": "isAccrual",
			"type": "boolean",
			"default": false,
			"description": "Indicates whether the request is for accrual of leave.\n- false will result in a reduction of the employee's leave entitlement\n- true will result in an increase of the employee's leave entitlement\n",
			"routing": {
				"send": {
					"property": "isAccrual",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave"
					],
					"operation": [
						"Put Leave By Leave ID"
					]
				}
			}
		},
		{
			"displayName": "Leave Type",
			"name": "leaveType",
			"type": "json",
			"default": "{\n  \"balanceExceedsYear\": true,\n  \"key\": 1,\n  \"value\": \"Verlof (bovenwettelijk)\"\n}",
			"description": "The type of leave requested by the employee\n`leaveType` is a metadata field within the employer context. Possible values can be managed by the user.",
			"routing": {
				"send": {
					"property": "leaveType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave"
					],
					"operation": [
						"Put Leave By Leave ID"
					]
				}
			}
		},
		{
			"displayName": "Number Of Units",
			"name": "numberOfUnits",
			"type": "number",
			"default": 8,
			"description": "The number of leave units requested",
			"routing": {
				"send": {
					"property": "numberOfUnits",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave"
					],
					"operation": [
						"Put Leave By Leave ID"
					]
				}
			}
		},
		{
			"displayName": "Origin",
			"name": "origin",
			"type": "json",
			"default": "{\n  \"leavePolicy\": {\n    \"id\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\",\n    \"leaveUnitType\": {\n      \"key\": 1,\n      \"value\": \"Uren\"\n    },\n    \"value\": \"Default leave Regulations\"\n  },\n  \"meansOfCreation\": {\n    \"key\": 1,\n    \"value\": \"individual\"\n  }\n}",
			"routing": {
				"send": {
					"property": "origin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave"
					],
					"operation": [
						"Put Leave By Leave ID"
					]
				}
			}
		},
		{
			"displayName": "Related Leave",
			"name": "relatedLeave",
			"type": "json",
			"default": "{\n  \"id\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\"\n}",
			"description": "Incase two leave records are linked to a single leave request the ID of the linked leave record is returned in this field. This is done because when deleting a leave record linked to a leave request the other leave record linked to that leave request is also deleted\n\nThe only functional scenario when this may occur is when a leave request is entered for leaveType 16 (Verlof). Depending on the leave balances, this might result in both a leave booking for Verlof (wettelijk) and Verlof (botenwettelijk).",
			"routing": {
				"send": {
					"property": "relatedLeave",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave"
					],
					"operation": [
						"Put Leave By Leave ID"
					]
				}
			}
		},
		{
			"displayName": "Related Leave Request",
			"name": "relatedLeaveRequest",
			"type": "json",
			"default": "{\n  \"id\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\"\n}",
			"description": "Incase that the leave record is the result of the approval of a leave request this value will be set to the ID of that leave request.",
			"routing": {
				"send": {
					"property": "relatedLeaveRequest",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave"
					],
					"operation": [
						"Put Leave By Leave ID"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "2017-11-01",
			"description": "The start date of the leave requested",
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
						"Leave"
					],
					"operation": [
						"Put Leave By Leave ID"
					]
				}
			}
		},
		{
			"displayName": "Unit Type",
			"name": "unitType",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"Uren\"\n}",
			"description": "If known indicates what the unit type (hours or days) is for `numberOfUnits`. Otherwise the field will be null.",
			"routing": {
				"send": {
					"property": "unitType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave"
					],
					"operation": [
						"Put Leave By Leave ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/leave/{leaveId}/metadata",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave"
					],
					"operation": [
						"Get Leave Metadata By Leave ID"
					]
				}
			}
		},
		{
			"displayName": "Leave ID",
			"name": "leaveId",
			"required": true,
			"description": "The unique identifier of the leave",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave"
					],
					"operation": [
						"Get Leave Metadata By Leave ID"
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
						"Leave"
					],
					"operation": [
						"Get Leave Metadata By Leave ID"
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
						"Leave"
					],
					"operation": [
						"Get Leave Metadata By Leave ID"
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
						"Leave"
					],
					"operation": [
						"Get Leave Metadata By Leave ID"
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
						"Leave"
					],
					"operation": [
						"Get Leave Metadata By Leave ID"
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
						"Leave"
					],
					"operation": [
						"Get Leave Metadata By Leave ID"
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
						"Leave"
					],
					"operation": [
						"Get Leave Metadata By Leave ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/{employmentId}/leave",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave"
					],
					"operation": [
						"Get Leave By Employment ID"
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
						"Leave"
					],
					"operation": [
						"Get Leave By Employment ID"
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
						"Leave"
					],
					"operation": [
						"Get Leave By Employment ID"
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
						"Leave"
					],
					"operation": [
						"Get Leave By Employment ID"
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
						"Leave"
					],
					"operation": [
						"Get Leave By Employment ID"
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
						"Leave"
					],
					"operation": [
						"Get Leave By Employment ID"
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
						"Leave"
					],
					"operation": [
						"Get Leave By Employment ID"
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
						"Leave"
					],
					"operation": [
						"Get Leave By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/employees/employments/{employmentId}/leave",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave"
					],
					"operation": [
						"Post Leave By Employment ID"
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
						"Leave"
					],
					"operation": [
						"Post Leave By Employment ID"
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
						"Leave"
					],
					"operation": [
						"Post Leave By Employment ID"
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
						"Leave"
					],
					"operation": [
						"Post Leave By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "comment",
			"type": "string",
			"default": "some comment",
			"routing": {
				"send": {
					"property": "comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave"
					],
					"operation": [
						"Post Leave By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"type": "string",
			"default": "2017-11-01",
			"description": "The end date of the leave requested (last day of the leave)",
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
						"Leave"
					],
					"operation": [
						"Post Leave By Employment ID"
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
						"Leave"
					],
					"operation": [
						"Post Leave By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Is Accrual",
			"name": "isAccrual",
			"type": "boolean",
			"default": false,
			"description": "Indicates whether the request is for accrual of leave.\n- false will result in a reduction of the employee's leave entitlement\n- true will result in an increase of the employee's leave entitlement\n",
			"routing": {
				"send": {
					"property": "isAccrual",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave"
					],
					"operation": [
						"Post Leave By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Leave Type",
			"name": "leaveType",
			"type": "json",
			"default": "{\n  \"balanceExceedsYear\": true,\n  \"key\": 1,\n  \"value\": \"Verlof (bovenwettelijk)\"\n}",
			"description": "The type of leave requested by the employee\n`leaveType` is a metadata field within the employer context. Possible values can be managed by the user.",
			"routing": {
				"send": {
					"property": "leaveType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave"
					],
					"operation": [
						"Post Leave By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Number Of Units",
			"name": "numberOfUnits",
			"type": "number",
			"default": 8,
			"description": "The number of leave units requested",
			"routing": {
				"send": {
					"property": "numberOfUnits",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave"
					],
					"operation": [
						"Post Leave By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Origin",
			"name": "origin",
			"type": "json",
			"default": "{\n  \"leavePolicy\": {\n    \"id\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\",\n    \"leaveUnitType\": {\n      \"key\": 1,\n      \"value\": \"Uren\"\n    },\n    \"value\": \"Default leave Regulations\"\n  },\n  \"meansOfCreation\": {\n    \"key\": 1,\n    \"value\": \"individual\"\n  }\n}",
			"routing": {
				"send": {
					"property": "origin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave"
					],
					"operation": [
						"Post Leave By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Related Leave",
			"name": "relatedLeave",
			"type": "json",
			"default": "{\n  \"id\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\"\n}",
			"description": "Incase two leave records are linked to a single leave request the ID of the linked leave record is returned in this field. This is done because when deleting a leave record linked to a leave request the other leave record linked to that leave request is also deleted\n\nThe only functional scenario when this may occur is when a leave request is entered for leaveType 16 (Verlof). Depending on the leave balances, this might result in both a leave booking for Verlof (wettelijk) and Verlof (botenwettelijk).",
			"routing": {
				"send": {
					"property": "relatedLeave",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave"
					],
					"operation": [
						"Post Leave By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Related Leave Request",
			"name": "relatedLeaveRequest",
			"type": "json",
			"default": "{\n  \"id\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\"\n}",
			"description": "Incase that the leave record is the result of the approval of a leave request this value will be set to the ID of that leave request.",
			"routing": {
				"send": {
					"property": "relatedLeaveRequest",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave"
					],
					"operation": [
						"Post Leave By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "2017-11-01",
			"description": "The start date of the leave requested",
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
						"Leave"
					],
					"operation": [
						"Post Leave By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Unit Type",
			"name": "unitType",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"Uren\"\n}",
			"description": "If known indicates what the unit type (hours or days) is for `numberOfUnits`. Otherwise the field will be null.",
			"routing": {
				"send": {
					"property": "unitType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave"
					],
					"operation": [
						"Post Leave By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/{employmentId}/leave/defaults",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave"
					],
					"operation": [
						"Get Leave Defaults By Employment ID"
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
						"Leave"
					],
					"operation": [
						"Get Leave Defaults By Employment ID"
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
						"Leave"
					],
					"operation": [
						"Get Leave Defaults By Employment ID"
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
						"Leave"
					],
					"operation": [
						"Get Leave Defaults By Employment ID"
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
						"Leave"
					],
					"operation": [
						"Get Leave Defaults By Employment ID"
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
						"Leave"
					],
					"operation": [
						"Get Leave Defaults By Employment ID"
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
						"Leave"
					],
					"operation": [
						"Get Leave Defaults By Employment ID"
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
						"Leave"
					],
					"operation": [
						"Get Leave Defaults By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/{employmentId}/leave/metadata",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave"
					],
					"operation": [
						"Get Leave Metadata By Employment ID"
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
						"Leave"
					],
					"operation": [
						"Get Leave Metadata By Employment ID"
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
						"Leave"
					],
					"operation": [
						"Get Leave Metadata By Employment ID"
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
						"Leave"
					],
					"operation": [
						"Get Leave Metadata By Employment ID"
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
						"Leave"
					],
					"operation": [
						"Get Leave Metadata By Employment ID"
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
						"Leave"
					],
					"operation": [
						"Get Leave Metadata By Employment ID"
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
						"Leave"
					],
					"operation": [
						"Get Leave Metadata By Employment ID"
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
						"Leave"
					],
					"operation": [
						"Get Leave Metadata By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/{employmentId}/leave/overview/{year}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave"
					],
					"operation": [
						"Get Leave Overview By Employment Idand Year"
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
						"Leave"
					],
					"operation": [
						"Get Leave Overview By Employment Idand Year"
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
						"Leave"
					],
					"operation": [
						"Get Leave Overview By Employment Idand Year"
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
						"Leave"
					],
					"operation": [
						"Get Leave Overview By Employment Idand Year"
					]
				}
			}
		},
		{
			"displayName": "Year",
			"name": "year",
			"required": true,
			"description": "The payroll year",
			"default": 2018,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave"
					],
					"operation": [
						"Get Leave Overview By Employment Idand Year"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/{employmentId}/leave/proposedleavehours",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave"
					],
					"operation": [
						"Get Proposed Leave Hours By Employment ID"
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
						"Leave"
					],
					"operation": [
						"Get Proposed Leave Hours By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"description": "The start date of the leave period",
			"default": "2022-08-01",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "startDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave"
					],
					"operation": [
						"Get Proposed Leave Hours By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"description": "The end date of the leave period",
			"default": "2022-08-07",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "endDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave"
					],
					"operation": [
						"Get Proposed Leave Hours By Employment ID"
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
						"Leave"
					],
					"operation": [
						"Get Proposed Leave Hours By Employment ID"
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
						"Leave"
					],
					"operation": [
						"Get Proposed Leave Hours By Employment ID"
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
						"Leave"
					],
					"operation": [
						"Get Proposed Leave Hours By Employment ID"
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
						"Leave"
					],
					"operation": [
						"Get Proposed Leave Hours By Employment ID"
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
						"Leave"
					],
					"operation": [
						"Get Proposed Leave Hours By Employment ID"
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
						"Leave"
					],
					"operation": [
						"Get Proposed Leave Hours By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/{employerId}/leave/proposedleavehours",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave"
					],
					"operation": [
						"Get Proposed Leave Hours By Employer ID"
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
						"Leave"
					],
					"operation": [
						"Get Proposed Leave Hours By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"description": "The start date of the leave period",
			"default": "2022-08-01",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "startDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave"
					],
					"operation": [
						"Get Proposed Leave Hours By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"description": "The end date of the leave period",
			"default": "2022-08-07",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "endDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave"
					],
					"operation": [
						"Get Proposed Leave Hours By Employer ID"
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
						"Leave"
					],
					"operation": [
						"Get Proposed Leave Hours By Employer ID"
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
						"Leave"
					],
					"operation": [
						"Get Proposed Leave Hours By Employer ID"
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
						"Leave"
					],
					"operation": [
						"Get Proposed Leave Hours By Employer ID"
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
						"Leave"
					],
					"operation": [
						"Get Proposed Leave Hours By Employer ID"
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
						"Leave"
					],
					"operation": [
						"Get Proposed Leave Hours By Employer ID"
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
						"Leave"
					],
					"operation": [
						"Get Proposed Leave Hours By Employer ID"
					]
				}
			}
		},
];
