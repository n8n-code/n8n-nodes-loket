import type { INodeProperties } from 'n8n-workflow';

export const workflowsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Workflows"
					]
				}
			},
			"options": [
				{
					"name": "Get Workflow By Workflow ID",
					"value": "Get Workflow By Workflow ID",
					"action": "Details of a workflow",
					"description": "__Activity name:__ GetWorkflowByWorkflowId\n\nGet the details of a workflow \n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/workflows/{{$parameter[\"workflowId\"]}}"
						}
					}
				},
				{
					"name": "Put Workflow By Workflow ID",
					"value": "Put Workflow By Workflow ID",
					"action": "Change the workflow",
					"description": "__Activity name:__ PutWorkflowByWorkflowId\n  \n\nAllows the user to change certain asspects of the workflow\n\n__Metadata :__ Possible options for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the POST URL.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/workflows/{{$parameter[\"workflowId\"]}}"
						}
					}
				},
				{
					"name": "Transition Workflow By Workflow ID",
					"value": "Transition Workflow By Workflow ID",
					"action": "Allows the user to transition the workflow.",
					"description": "__Activity name:__ TransitionWorkflowByWorkflowId\n  \n\nAllows the user to transition the workflow to a different state. \nUse the workflows endpoint and then the `allowedTransitions` element to determine what to submit to this endpoint.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/workflows/{{$parameter[\"workflowId\"]}}/transition"
						}
					}
				},
				{
					"name": "Get Assigned Workflows By Employer ID",
					"value": "Get Assigned Workflows By Employer ID",
					"action": "Workflows assigned to the user",
					"description": "__Activity name:__ GetAssignedWorkflowsByEmployerId\n    \n\nGet the list workflows that are assigned to the user or the role of the user.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/assignedworkflows"
						}
					}
				},
				{
					"name": "Get Workflows By Employer ID",
					"value": "Get Workflows By Employer ID",
					"action": "Workflows for the employer",
					"description": "__Activity name:__ GetWorkflowsByEmployerId\n    \n\nGet the list of all workflows for an employer. All as in both open as finished workflows are returned.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/workflows"
						}
					}
				},
				{
					"name": "Get Initiated Workflows By Bearer Token",
					"value": "Get Initiated Workflows By Bearer Token",
					"action": "Workflows initiated by the user",
					"description": "__Activity name:__ GetInitiatedWorkflowsByBearerToken\n    \n\nGet the workflows that are initiated by the user.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/initiatedworkflows"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/employers/workflows/{workflowId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Workflows"
					],
					"operation": [
						"Get Workflow By Workflow ID"
					]
				}
			}
		},
		{
			"displayName": "Workflow ID",
			"name": "workflowId",
			"required": true,
			"description": "The unique identifier of the record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Workflows"
					],
					"operation": [
						"Get Workflow By Workflow ID"
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
						"Workflows"
					],
					"operation": [
						"Get Workflow By Workflow ID"
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
						"Workflows"
					],
					"operation": [
						"Get Workflow By Workflow ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/workflows/{workflowId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Workflows"
					],
					"operation": [
						"Put Workflow By Workflow ID"
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
						"Workflows"
					],
					"operation": [
						"Put Workflow By Workflow ID"
					]
				}
			}
		},
		{
			"displayName": "Workflow ID",
			"name": "workflowId",
			"required": true,
			"description": "The unique identifier of the record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Workflows"
					],
					"operation": [
						"Put Workflow By Workflow ID"
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
						"Workflows"
					],
					"operation": [
						"Put Workflow By Workflow ID"
					]
				}
			}
		},
		{
			"displayName": "Allowed Transitions",
			"name": "allowedTransitions",
			"type": "json",
			"default": "[\n  {\n    \"description\": \"Controleer de vergoedingen\",\n    \"href\": \"https://api.loket.nl/v2/providers/employers/workflows/{workflowId}/transition\",\n    \"transitions\": [\n      {\n        \"action\": \"fabf3b25-abf9-4e8c-a8f7-81400d1b0e96\",\n        \"description\": \"Approve\"\n      },\n      {\n        \"action\": \"abc31d45-f593-4d73-8078-6caba9cebdcc\",\n        \"description\": \"Reject\"\n      }\n    ]\n  }\n]",
			"description": "In this object the posible transitions are returned.\nBy sending a request to the `href` with the given `httpVerb` and one of the options given in `transitions` in the body. The workflow is transitioned to the given state.",
			"routing": {
				"send": {
					"property": "allowedTransitions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Workflows"
					],
					"operation": [
						"Put Workflow By Workflow ID"
					]
				}
			}
		},
		{
			"displayName": "Assignee",
			"name": "assignee",
			"type": "json",
			"default": "{\n  \"role\": {\n    \"description\": \"Employer\",\n    \"id\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\"\n  },\n  \"user\": {\n    \"formattedName\": \"Jong, I\",\n    \"id\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\",\n    \"initials\": \"I\",\n    \"lastName\": \"Jong\",\n    \"prefix\": \"de\"\n  }\n}",
			"description": "A workflow is either assigned to a user or a role. A role can be filled by multiple users.",
			"routing": {
				"send": {
					"property": "assignee",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Workflows"
					],
					"operation": [
						"Put Workflow By Workflow ID"
					]
				}
			}
		},
		{
			"displayName": "Data",
			"name": "data",
			"type": "string",
			"default": {
				"address": {
					"city": "Leiden",
					"country": {
						"key": 1
					},
					"houseNumber": 12,
					"houseNumberAddition": "D",
					"postalCode": "1234 AA",
					"street": "Voordijk"
				}
			},
			"description": "A JSON representation of the mutation/data regarding this workflow",
			"routing": {
				"send": {
					"property": "data",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Workflows"
					],
					"operation": [
						"Put Workflow By Workflow ID"
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
						"Workflows"
					],
					"operation": [
						"Put Workflow By Workflow ID"
					]
				}
			}
		},
		{
			"displayName": "Initiated By",
			"name": "initiatedBy",
			"type": "json",
			"default": "{\n  \"formattedName\": \"Jong, I\",\n  \"id\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\",\n  \"initials\": \"I\",\n  \"lastName\": \"Jong\",\n  \"prefix\": \"de\"\n}",
			"routing": {
				"send": {
					"property": "initiatedBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Workflows"
					],
					"operation": [
						"Put Workflow By Workflow ID"
					]
				}
			}
		},
		{
			"displayName": "Initiated On",
			"name": "initiatedOn",
			"type": "string",
			"default": "2019-11-23T11:14:06Z",
			"routing": {
				"send": {
					"property": "initiatedOn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Workflows"
					],
					"operation": [
						"Put Workflow By Workflow ID"
					]
				}
			}
		},
		{
			"displayName": "Last Modified By",
			"name": "lastModifiedBy",
			"type": "json",
			"default": "{\n  \"formattedName\": \"Jong, I\",\n  \"id\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\",\n  \"initials\": \"I\",\n  \"lastName\": \"Jong\",\n  \"prefix\": \"de\"\n}",
			"routing": {
				"send": {
					"property": "lastModifiedBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Workflows"
					],
					"operation": [
						"Put Workflow By Workflow ID"
					]
				}
			}
		},
		{
			"displayName": "Last Modified On",
			"name": "lastModifiedOn",
			"type": "string",
			"default": "2019-11-23T11:14:06Z",
			"description": "date and time on which the last modification on the workflow was performed. This can be either by the system or a user.",
			"routing": {
				"send": {
					"property": "lastModifiedOn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Workflows"
					],
					"operation": [
						"Put Workflow By Workflow ID"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "json",
			"default": "{\n  \"key\": 1,\n  \"value\": \"In progress\"\n}",
			"description": "Indicates the status of the workflow as a whole.",
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Workflows"
					],
					"operation": [
						"Put Workflow By Workflow ID"
					]
				}
			}
		},
		{
			"displayName": "Trigger",
			"name": "trigger",
			"type": "json",
			"default": "{\n  \"description\": \"Address change for employee\",\n  \"id\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\"\n}",
			"description": "Indicates the trigger that started the workflow.\n\n`trigger` is a metadata field within the employer context. Possible values can be managed by the user. ",
			"routing": {
				"send": {
					"property": "trigger",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Workflows"
					],
					"operation": [
						"Put Workflow By Workflow ID"
					]
				}
			}
		},
		{
			"displayName": "Workflow Template",
			"name": "workflowTemplate",
			"type": "json",
			"default": "{\n  \"description\": \"Approval by employer\",\n  \"id\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\",\n  \"version\": 2\n}",
			"description": "Indicates what workflow template was used to initiate the workflow.\n\n`workflowTemplate` is a metadata field within the employer context. Possible values can be managed by the user. ",
			"routing": {
				"send": {
					"property": "workflowTemplate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Workflows"
					],
					"operation": [
						"Put Workflow By Workflow ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/workflows/{workflowId}/transition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Workflows"
					],
					"operation": [
						"Transition Workflow By Workflow ID"
					]
				}
			}
		},
		{
			"displayName": "Workflow ID",
			"name": "workflowId",
			"required": true,
			"description": "The unique identifier of the record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Workflows"
					],
					"operation": [
						"Transition Workflow By Workflow ID"
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
						"Workflows"
					],
					"operation": [
						"Transition Workflow By Workflow ID"
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
						"Workflows"
					],
					"operation": [
						"Transition Workflow By Workflow ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/{employerId}/assignedworkflows",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Workflows"
					],
					"operation": [
						"Get Assigned Workflows By Employer ID"
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
						"Workflows"
					],
					"operation": [
						"Get Assigned Workflows By Employer ID"
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
						"Workflows"
					],
					"operation": [
						"Get Assigned Workflows By Employer ID"
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
						"Workflows"
					],
					"operation": [
						"Get Assigned Workflows By Employer ID"
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
						"Workflows"
					],
					"operation": [
						"Get Assigned Workflows By Employer ID"
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
						"Workflows"
					],
					"operation": [
						"Get Assigned Workflows By Employer ID"
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
						"Workflows"
					],
					"operation": [
						"Get Assigned Workflows By Employer ID"
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
						"Workflows"
					],
					"operation": [
						"Get Assigned Workflows By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/{employerId}/workflows",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Workflows"
					],
					"operation": [
						"Get Workflows By Employer ID"
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
						"Workflows"
					],
					"operation": [
						"Get Workflows By Employer ID"
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
						"Workflows"
					],
					"operation": [
						"Get Workflows By Employer ID"
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
						"Workflows"
					],
					"operation": [
						"Get Workflows By Employer ID"
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
						"Workflows"
					],
					"operation": [
						"Get Workflows By Employer ID"
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
						"Workflows"
					],
					"operation": [
						"Get Workflows By Employer ID"
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
						"Workflows"
					],
					"operation": [
						"Get Workflows By Employer ID"
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
						"Workflows"
					],
					"operation": [
						"Get Workflows By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "GET /users/initiatedworkflows",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Workflows"
					],
					"operation": [
						"Get Initiated Workflows By Bearer Token"
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
						"Workflows"
					],
					"operation": [
						"Get Initiated Workflows By Bearer Token"
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
						"Workflows"
					],
					"operation": [
						"Get Initiated Workflows By Bearer Token"
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
						"Workflows"
					],
					"operation": [
						"Get Initiated Workflows By Bearer Token"
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
						"Workflows"
					],
					"operation": [
						"Get Initiated Workflows By Bearer Token"
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
						"Workflows"
					],
					"operation": [
						"Get Initiated Workflows By Bearer Token"
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
						"Workflows"
					],
					"operation": [
						"Get Initiated Workflows By Bearer Token"
					]
				}
			}
		},
];
