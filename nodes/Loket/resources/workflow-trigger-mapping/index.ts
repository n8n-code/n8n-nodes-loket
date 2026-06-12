import type { INodeProperties } from 'n8n-workflow';

export const workflowTriggerMappingDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Workflow Trigger Mapping"
					]
				}
			},
			"options": [
				{
					"name": "Delete Fiscal Properties Byworkflow Trigger ID",
					"value": "Delete Fiscal Properties Byworkflow Trigger ID",
					"action": "Delete a specific workflow trigger mapping record",
					"description": "__Activity name:__ DeleteWorkflowTriggerMappingByWorkflowTriggerMappingId\n\nDelete a workflow trigger mapping record for the employer\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/workflowtriggermappings/{{$parameter[\"workflowTriggerMappingId\"]}}"
						}
					}
				},
				{
					"name": "Get Workflow Trigger Mapping By Workflow Trigger Mapping ID",
					"value": "Get Workflow Trigger Mapping By Workflow Trigger Mapping ID",
					"action": "Details of a workflow trigger mapping record",
					"description": "__Activity name:__ GetWorkflowTriggerMappingByWorkflowTriggerMappingId\n\nGet the details of a workflow trigger mapping\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/workflowtriggermappings/{{$parameter[\"workflowTriggerMappingId\"]}}"
						}
					}
				},
				{
					"name": "Put Workflow Trigger By Workflow Trigger ID",
					"value": "Put Workflow Trigger By Workflow Trigger ID",
					"action": "Edit the details of a workflow trigger mapping record",
					"description": "__Activity name:__ PutWorkflowTriggerMappingByWorkflowTriggerMappingId\n\nEdit the details for a workflow trigger mapping record\n\nPossible options for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the PUT URL.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/workflowtriggermappings/{{$parameter[\"workflowTriggerMappingId\"]}}"
						}
					}
				},
				{
					"name": "Get Workflow Trigger Mappings By Employer ID",
					"value": "Get Workflow Trigger Mappings By Employer ID",
					"action": "Workflowtrigger to workflowtemplate mapping",
					"description": "__Activity name:__ GetWorkflowTriggerMappingsByEmployerId\n    \n\nGet the list workflow triggers that are mapped to a workflowTemplate.  Workflow triggers are triggers that trigger a workflow. With this resource one can manage which trigger will trigger what workflow.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/workflowtriggermappings"
						}
					}
				},
				{
					"name": "Post Workflow Trigger Mapping By Employer ID",
					"value": "Post Workflow Trigger Mapping By Employer ID",
					"action": "Create a workflow trigger mapping record for an employer",
					"description": "__Activity name:__ PostWorkflowTriggerMappingByEmployerId\n    \n\nCreate a workflow trigger mapping record for an employer\n\n__Metadata :__ Possible options for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the POST URL.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/workflowtriggermappings"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /providers/employers/workflowtriggermappings/{workflowTriggerMappingId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Workflow Trigger Mapping"
					],
					"operation": [
						"Delete Fiscal Properties Byworkflow Trigger ID"
					]
				}
			}
		},
		{
			"displayName": "Workflow Trigger Mapping ID",
			"name": "workflowTriggerMappingId",
			"required": true,
			"description": "The unique identifier of the record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Workflow Trigger Mapping"
					],
					"operation": [
						"Delete Fiscal Properties Byworkflow Trigger ID"
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
						"Workflow Trigger Mapping"
					],
					"operation": [
						"Delete Fiscal Properties Byworkflow Trigger ID"
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
						"Workflow Trigger Mapping"
					],
					"operation": [
						"Delete Fiscal Properties Byworkflow Trigger ID"
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
						"Workflow Trigger Mapping"
					],
					"operation": [
						"Delete Fiscal Properties Byworkflow Trigger ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/workflowtriggermappings/{workflowTriggerMappingId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Workflow Trigger Mapping"
					],
					"operation": [
						"Get Workflow Trigger Mapping By Workflow Trigger Mapping ID"
					]
				}
			}
		},
		{
			"displayName": "Workflow Trigger Mapping ID",
			"name": "workflowTriggerMappingId",
			"required": true,
			"description": "The unique identifier of the record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Workflow Trigger Mapping"
					],
					"operation": [
						"Get Workflow Trigger Mapping By Workflow Trigger Mapping ID"
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
						"Workflow Trigger Mapping"
					],
					"operation": [
						"Get Workflow Trigger Mapping By Workflow Trigger Mapping ID"
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
						"Workflow Trigger Mapping"
					],
					"operation": [
						"Get Workflow Trigger Mapping By Workflow Trigger Mapping ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/workflowtriggermappings/{workflowTriggerMappingId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Workflow Trigger Mapping"
					],
					"operation": [
						"Put Workflow Trigger By Workflow Trigger ID"
					]
				}
			}
		},
		{
			"displayName": "Workflow Trigger Mapping ID",
			"name": "workflowTriggerMappingId",
			"required": true,
			"description": "The unique identifier of the record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Workflow Trigger Mapping"
					],
					"operation": [
						"Put Workflow Trigger By Workflow Trigger ID"
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
						"Workflow Trigger Mapping"
					],
					"operation": [
						"Put Workflow Trigger By Workflow Trigger ID"
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
						"Workflow Trigger Mapping"
					],
					"operation": [
						"Put Workflow Trigger By Workflow Trigger ID"
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
						"Workflow Trigger Mapping"
					],
					"operation": [
						"Put Workflow Trigger By Workflow Trigger ID"
					]
				}
			}
		},
		{
			"displayName": "Created By",
			"name": "createdBy",
			"type": "json",
			"default": "{\n  \"formattedName\": \"Jong, I\",\n  \"id\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\",\n  \"initials\": \"I\",\n  \"lastName\": \"Jong\",\n  \"prefix\": \"de\"\n}",
			"routing": {
				"send": {
					"property": "createdBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Workflow Trigger Mapping"
					],
					"operation": [
						"Put Workflow Trigger By Workflow Trigger ID"
					]
				}
			}
		},
		{
			"displayName": "Created On",
			"name": "createdOn",
			"type": "string",
			"default": "2019-11-23T11:14:06Z",
			"routing": {
				"send": {
					"property": "createdOn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Workflow Trigger Mapping"
					],
					"operation": [
						"Put Workflow Trigger By Workflow Trigger ID"
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
						"Workflow Trigger Mapping"
					],
					"operation": [
						"Put Workflow Trigger By Workflow Trigger ID"
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
						"Workflow Trigger Mapping"
					],
					"operation": [
						"Put Workflow Trigger By Workflow Trigger ID"
					]
				}
			}
		},
		{
			"displayName": "Last Modified On",
			"name": "lastModifiedOn",
			"type": "string",
			"default": "2019-11-23T11:14:06Z",
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
						"Workflow Trigger Mapping"
					],
					"operation": [
						"Put Workflow Trigger By Workflow Trigger ID"
					]
				}
			}
		},
		{
			"displayName": "Trigger",
			"name": "trigger",
			"type": "json",
			"default": "{\n  \"description\": \"Address change for employee\",\n  \"id\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\"\n}",
			"description": "Indicates the workflow trigger to be configured.\n\n`trigger` is a metadata field within the employer context. Possible values can be managed by the user. ",
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
						"Workflow Trigger Mapping"
					],
					"operation": [
						"Put Workflow Trigger By Workflow Trigger ID"
					]
				}
			}
		},
		{
			"displayName": "Workflow Template",
			"name": "workflowTemplate",
			"type": "json",
			"default": "{\n  \"description\": \"Approval by employer\",\n  \"id\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\"\n}",
			"description": "Indicates what workflow template will be used to initiate a workflow when the trigger takes place.\n\n`workflowTemplate` is a metadata field within the employer context. Possible values can be managed by the user. ",
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
						"Workflow Trigger Mapping"
					],
					"operation": [
						"Put Workflow Trigger By Workflow Trigger ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/{employerId}/workflowtriggermappings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Workflow Trigger Mapping"
					],
					"operation": [
						"Get Workflow Trigger Mappings By Employer ID"
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
						"Workflow Trigger Mapping"
					],
					"operation": [
						"Get Workflow Trigger Mappings By Employer ID"
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
						"Workflow Trigger Mapping"
					],
					"operation": [
						"Get Workflow Trigger Mappings By Employer ID"
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
						"Workflow Trigger Mapping"
					],
					"operation": [
						"Get Workflow Trigger Mappings By Employer ID"
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
						"Workflow Trigger Mapping"
					],
					"operation": [
						"Get Workflow Trigger Mappings By Employer ID"
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
						"Workflow Trigger Mapping"
					],
					"operation": [
						"Get Workflow Trigger Mappings By Employer ID"
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
						"Workflow Trigger Mapping"
					],
					"operation": [
						"Get Workflow Trigger Mappings By Employer ID"
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
						"Workflow Trigger Mapping"
					],
					"operation": [
						"Get Workflow Trigger Mappings By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/{employerId}/workflowtriggermappings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Workflow Trigger Mapping"
					],
					"operation": [
						"Post Workflow Trigger Mapping By Employer ID"
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
						"Workflow Trigger Mapping"
					],
					"operation": [
						"Post Workflow Trigger Mapping By Employer ID"
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
						"Workflow Trigger Mapping"
					],
					"operation": [
						"Post Workflow Trigger Mapping By Employer ID"
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
						"Workflow Trigger Mapping"
					],
					"operation": [
						"Post Workflow Trigger Mapping By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Created By",
			"name": "createdBy",
			"type": "json",
			"default": "{\n  \"formattedName\": \"Jong, I\",\n  \"id\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\",\n  \"initials\": \"I\",\n  \"lastName\": \"Jong\",\n  \"prefix\": \"de\"\n}",
			"routing": {
				"send": {
					"property": "createdBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Workflow Trigger Mapping"
					],
					"operation": [
						"Post Workflow Trigger Mapping By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Created On",
			"name": "createdOn",
			"type": "string",
			"default": "2019-11-23T11:14:06Z",
			"routing": {
				"send": {
					"property": "createdOn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Workflow Trigger Mapping"
					],
					"operation": [
						"Post Workflow Trigger Mapping By Employer ID"
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
						"Workflow Trigger Mapping"
					],
					"operation": [
						"Post Workflow Trigger Mapping By Employer ID"
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
						"Workflow Trigger Mapping"
					],
					"operation": [
						"Post Workflow Trigger Mapping By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Last Modified On",
			"name": "lastModifiedOn",
			"type": "string",
			"default": "2019-11-23T11:14:06Z",
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
						"Workflow Trigger Mapping"
					],
					"operation": [
						"Post Workflow Trigger Mapping By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Trigger",
			"name": "trigger",
			"type": "json",
			"default": "{\n  \"description\": \"Address change for employee\",\n  \"id\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\"\n}",
			"description": "Indicates the workflow trigger to be configured.\n\n`trigger` is a metadata field within the employer context. Possible values can be managed by the user. ",
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
						"Workflow Trigger Mapping"
					],
					"operation": [
						"Post Workflow Trigger Mapping By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Workflow Template",
			"name": "workflowTemplate",
			"type": "json",
			"default": "{\n  \"description\": \"Approval by employer\",\n  \"id\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\"\n}",
			"description": "Indicates what workflow template will be used to initiate a workflow when the trigger takes place.\n\n`workflowTemplate` is a metadata field within the employer context. Possible values can be managed by the user. ",
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
						"Workflow Trigger Mapping"
					],
					"operation": [
						"Post Workflow Trigger Mapping By Employer ID"
					]
				}
			}
		},
];
