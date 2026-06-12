import type { INodeProperties } from 'n8n-workflow';

export const leaveRequestDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Request"
					]
				}
			},
			"options": [
				{
					"name": "Patch Leave Requests By Leave Request Ids",
					"value": "Patch Leave Requests By Leave Request Ids",
					"action": "Change the status of leave requests",
					"description": "__Activity name :__ PatchLeaveRequestsByLeaveRequestIds\n\nThis endpoints changes the status of the list of leave requests provided in the request body to the provided status. The leave requests are processed one by one. The leave requests that had no error's will be commited to the database while those with an error will be skipped. If an error occured the service will return a 400 bad request with a message explaining what error occured for what ID (GUID).  The leave requests that where processed succesfully will not be returned in te response.\n",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/providers/employers/employees/employments/leaverequests"
						}
					}
				},
				{
					"name": "Get Leave Request By Leave Request ID",
					"value": "Get Leave Request By Leave Request ID",
					"action": "Details of a leave request",
					"description": "__Activity name :__ GetLeaveRequestByLeaveRequestId\n\nGet the details of a single leave request\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/leaverequests/{{$parameter[\"leaveRequestId\"]}}"
						}
					}
				},
				{
					"name": "Put Leave Request By Leave Request ID",
					"value": "Put Leave Request By Leave Request ID",
					"action": "Change the details of a leave request",
					"description": "__Activity name :__ PutLeaveRequestByLeaveRequestId\n   \n\nChange the details of a Leave request\n\n__Important:__ A PUT is only allowed when the leave requests is in the status \"submitted\"/\"ingediend\". Only the field of `commentHandler`  may be editied in other statuses.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/employees/employments/leaverequests/{{$parameter[\"leaveRequestId\"]}}"
						}
					}
				},
				{
					"name": "Get Leave Requests By Employment ID",
					"value": "Get Leave Requests By Employment ID",
					"action": "leave requests by employment",
					"description": "__Activity name :__ GetLeaveRequestsByEmploymentId\n\nGet a list of all leave requests for the given employment\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/leaverequests"
						}
					}
				},
				{
					"name": "Get Leave Requests For Employer",
					"value": "Get Leave Requests For Employer",
					"action": "List of leave requests for the employees of an employer",
					"description": "__Activity name :__ GetLeaveRequestsByEmployerId\n\nReturns a list of leave requests for the employments of the employer\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/employees/employments/leaverequests"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "PATCH /providers/employers/employees/employments/leaverequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Request"
					],
					"operation": [
						"Patch Leave Requests By Leave Request Ids"
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
						"Leave Request"
					],
					"operation": [
						"Patch Leave Requests By Leave Request Ids"
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
						"Leave Request"
					],
					"operation": [
						"Patch Leave Requests By Leave Request Ids"
					]
				}
			}
		},
		{
			"displayName": "Body",
			"name": "body",
			"type": "string",
			"default": {
				"id": "b14acd0d-75d7-4fc8-8b22-4a3924585cab"
			},
			"routing": {
				"request": {
					"body": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Request"
					],
					"operation": [
						"Patch Leave Requests By Leave Request Ids"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/leaverequests/{leaveRequestId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Request"
					],
					"operation": [
						"Get Leave Request By Leave Request ID"
					]
				}
			}
		},
		{
			"displayName": "Leave Request ID",
			"name": "leaveRequestId",
			"required": true,
			"description": "The unique identifier of the leave request",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Request"
					],
					"operation": [
						"Get Leave Request By Leave Request ID"
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
						"Leave Request"
					],
					"operation": [
						"Get Leave Request By Leave Request ID"
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
						"Leave Request"
					],
					"operation": [
						"Get Leave Request By Leave Request ID"
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
						"Leave Request"
					],
					"operation": [
						"Get Leave Request By Leave Request ID"
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
						"Leave Request"
					],
					"operation": [
						"Get Leave Request By Leave Request ID"
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
						"Leave Request"
					],
					"operation": [
						"Get Leave Request By Leave Request ID"
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
						"Leave Request"
					],
					"operation": [
						"Get Leave Request By Leave Request ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/employees/employments/leaverequests/{leaveRequestId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Request"
					],
					"operation": [
						"Put Leave Request By Leave Request ID"
					]
				}
			}
		},
		{
			"displayName": "Leave Request ID",
			"name": "leaveRequestId",
			"required": true,
			"description": "The unique identifier of the leave request",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Request"
					],
					"operation": [
						"Put Leave Request By Leave Request ID"
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
						"Leave Request"
					],
					"operation": [
						"Put Leave Request By Leave Request ID"
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
						"Leave Request"
					],
					"operation": [
						"Put Leave Request By Leave Request ID"
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
						"Leave Request"
					],
					"operation": [
						"Put Leave Request By Leave Request ID"
					]
				}
			}
		},
		{
			"displayName": "Comment Employee",
			"name": "commentEmployee",
			"type": "string",
			"default": "Vakantie naar Spanje",
			"description": "The comment left by the employee",
			"routing": {
				"send": {
					"property": "commentEmployee",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Request"
					],
					"operation": [
						"Put Leave Request By Leave Request ID"
					]
				}
			}
		},
		{
			"displayName": "Comment Handler",
			"name": "commentHandler",
			"type": "string",
			"default": "Fijne vakantie!",
			"description": "The comment left by the person handling the leave request",
			"routing": {
				"send": {
					"property": "commentHandler",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Request"
					],
					"operation": [
						"Put Leave Request By Leave Request ID"
					]
				}
			}
		},
		{
			"displayName": "Currently Available Units",
			"name": "currentlyAvailableUnits",
			"type": "number",
			"default": 140,
			"description": "The number of leave units (of the leaveType for this leave request) available to the employment.\nThis value can be negative.",
			"routing": {
				"send": {
					"property": "currentlyAvailableUnits",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Request"
					],
					"operation": [
						"Put Leave Request By Leave Request ID"
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
						"Leave Request"
					],
					"operation": [
						"Put Leave Request By Leave Request ID"
					]
				}
			}
		},
		{
			"displayName": "Handled By",
			"name": "handledBy",
			"type": "json",
			"default": "{\n  \"formattedName\": \"Jong, I\",\n  \"id\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\",\n  \"initials\": \"ABC\",\n  \"lastName\": \"Jong\",\n  \"prefix\": \"de\"\n}",
			"routing": {
				"send": {
					"property": "handledBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Request"
					],
					"operation": [
						"Put Leave Request By Leave Request ID"
					]
				}
			}
		},
		{
			"displayName": "Handled Time",
			"name": "handledTime",
			"type": "string",
			"default": "2018-05-08T15:16:49+02:00",
			"description": "The date and time the leave request was handled",
			"routing": {
				"send": {
					"property": "handledTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Request"
					],
					"operation": [
						"Put Leave Request By Leave Request ID"
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
						"Leave Request"
					],
					"operation": [
						"Put Leave Request By Leave Request ID"
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
						"Leave Request"
					],
					"operation": [
						"Put Leave Request By Leave Request ID"
					]
				}
			}
		},
		{
			"displayName": "Leave Request Status",
			"name": "leaveRequestStatus",
			"type": "json",
			"default": "{\n  \"key\": 9,\n  \"value\": \"Geaccepteerd\"\n}",
			"description": "The current status of the leave request\n\nThe leave request status is changed by using the PATCH endpoint (not the PUT).\n\nThe following transitions are possible\n* leaveRequestStatus = submitted -> accepted or rejected\n* leaveRequestStatus = accepted -> no changes possible\n* leaveRequestStatus = rejected -> submitted\n* leaveRequestStatus = revoked by user -> no changes possible\n* leaveRequestStatus = related leave deleted -> no changes possible",
			"routing": {
				"send": {
					"property": "leaveRequestStatus",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Request"
					],
					"operation": [
						"Put Leave Request By Leave Request ID"
					]
				}
			}
		},
		{
			"displayName": "Leave Type",
			"name": "leaveType",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"Verlof (bovenwettelijk)\"\n}",
			"description": "The type of leave requested by the employee\n\n`leaveType` is a metadata field within the employer context. Possible values can be managed by the user.",
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
						"Leave Request"
					],
					"operation": [
						"Put Leave Request By Leave Request ID"
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
						"Leave Request"
					],
					"operation": [
						"Put Leave Request By Leave Request ID"
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
						"Leave Request"
					],
					"operation": [
						"Put Leave Request By Leave Request ID"
					]
				}
			}
		},
		{
			"displayName": "Submitted By",
			"name": "submittedBy",
			"type": "json",
			"default": "{\n  \"dateOfBirth\": \"1995-05-21\",\n  \"employeeNumber\": 156,\n  \"firstName\": \"Susan\",\n  \"formattedName\": \"Wiel - van Bergen S.L. van de\",\n  \"id\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\",\n  \"initials\": \"S.L.\",\n  \"lastName\": \"Bergen\",\n  \"lastNamePartner\": \"Wiel\",\n  \"photo\": \"https://api.loket.nl/v2/providers/employers/employees/{employeeId}/photo/{version}\",\n  \"prefix\": \"van\",\n  \"prefixPartner\": \"van de\"\n}",
			"routing": {
				"send": {
					"property": "submittedBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Request"
					],
					"operation": [
						"Put Leave Request By Leave Request ID"
					]
				}
			}
		},
		{
			"displayName": "Submitted On",
			"name": "submittedOn",
			"type": "string",
			"default": "2018-05-08T15:16:49+02:00",
			"description": "The time the leave request was submitted",
			"routing": {
				"send": {
					"property": "submittedOn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Request"
					],
					"operation": [
						"Put Leave Request By Leave Request ID"
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
						"Leave Request"
					],
					"operation": [
						"Put Leave Request By Leave Request ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/{employmentId}/leaverequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Request"
					],
					"operation": [
						"Get Leave Requests By Employment ID"
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
						"Leave Request"
					],
					"operation": [
						"Get Leave Requests By Employment ID"
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
						"Leave Request"
					],
					"operation": [
						"Get Leave Requests By Employment ID"
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
						"Leave Request"
					],
					"operation": [
						"Get Leave Requests By Employment ID"
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
						"Leave Request"
					],
					"operation": [
						"Get Leave Requests By Employment ID"
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
						"Leave Request"
					],
					"operation": [
						"Get Leave Requests By Employment ID"
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
						"Leave Request"
					],
					"operation": [
						"Get Leave Requests By Employment ID"
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
						"Leave Request"
					],
					"operation": [
						"Get Leave Requests By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/{employerId}/employees/employments/leaverequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Request"
					],
					"operation": [
						"Get Leave Requests For Employer"
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
						"Leave Request"
					],
					"operation": [
						"Get Leave Requests For Employer"
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
						"Leave Request"
					],
					"operation": [
						"Get Leave Requests For Employer"
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
						"Leave Request"
					],
					"operation": [
						"Get Leave Requests For Employer"
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
						"Leave Request"
					],
					"operation": [
						"Get Leave Requests For Employer"
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
						"Leave Request"
					],
					"operation": [
						"Get Leave Requests For Employer"
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
						"Leave Request"
					],
					"operation": [
						"Get Leave Requests For Employer"
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
						"Leave Request"
					],
					"operation": [
						"Get Leave Requests For Employer"
					]
				}
			}
		},
];
