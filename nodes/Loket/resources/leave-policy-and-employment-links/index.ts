import type { INodeProperties } from 'n8n-workflow';

export const leavePolicyAndEmploymentLinksDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy And Employment Links"
					]
				}
			},
			"options": [
				{
					"name": "Get Leave Policies By Employment ID",
					"value": "Get Leave Policies By Employment ID",
					"action": "Get list of linked leave policies for the employment",
					"description": "__Activity name:__ GetLeavePoliciesByEmploymentId\n    \n\nGet the list of leave policies linked to the employment.\nIf a leave policy and employment are linked, that means the employment will be provided the leave based on the policy.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/leavepolicies"
						}
					}
				},
				{
					"name": "Patch Leave Policies By Employment ID",
					"value": "Patch Leave Policies By Employment ID",
					"action": "Link or unlink leave policies for the employment",
					"description": "__Activity name:__ PatchLeavePoliciesByEmploymentId\n\n__Metadata :__ Possible options can be acquired (GET) by adding `/metadata` to the POST URL.\n\nThis endpoint enables the user to link or unlink multiple 'linkages' with one call.\n",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/leavepolicies"
						}
					}
				},
				{
					"name": "Get Employments By Leave Policy ID",
					"value": "Get Employments By Leave Policy ID",
					"action": "Get list of linked employments for the leave policy",
					"description": "__Activity name:__ GetEmploymentsByLeavePolicyId\nGet the list of employments that are linked for this leave policy.\nWhen a leave policy and an employment are linked, that means the employment will be provided with leave based on the policy.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/leavepolicies/{{$parameter[\"leavePolicyId\"]}}/employments"
						}
					}
				},
				{
					"name": "Patch Employments By Leave Policy ID",
					"value": "Patch Employments By Leave Policy ID",
					"action": "Create or delete multiple linked employments for the leave policy",
					"description": "__Activity name:__ PatchEmploymentsByLeavePolicyId\nThis endpoint enables the user to create or delete multiple 'linkages' with one call. This is mostly useful updating a larger number of employments for the given leave policy.\n",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/providers/employers/leavepolicies/{{$parameter[\"leavePolicyId\"]}}/employments"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/employers/employees/employments/{employmentId}/leavepolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy And Employment Links"
					],
					"operation": [
						"Get Leave Policies By Employment ID"
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
						"Leave Policy And Employment Links"
					],
					"operation": [
						"Get Leave Policies By Employment ID"
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
						"Leave Policy And Employment Links"
					],
					"operation": [
						"Get Leave Policies By Employment ID"
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
						"Leave Policy And Employment Links"
					],
					"operation": [
						"Get Leave Policies By Employment ID"
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
						"Leave Policy And Employment Links"
					],
					"operation": [
						"Get Leave Policies By Employment ID"
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
						"Leave Policy And Employment Links"
					],
					"operation": [
						"Get Leave Policies By Employment ID"
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
						"Leave Policy And Employment Links"
					],
					"operation": [
						"Get Leave Policies By Employment ID"
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
						"Leave Policy And Employment Links"
					],
					"operation": [
						"Get Leave Policies By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "PATCH /providers/employers/employees/employments/{employmentId}/leavepolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy And Employment Links"
					],
					"operation": [
						"Patch Leave Policies By Employment ID"
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
						"Leave Policy And Employment Links"
					],
					"operation": [
						"Patch Leave Policies By Employment ID"
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
						"Leave Policy And Employment Links"
					],
					"operation": [
						"Patch Leave Policies By Employment ID"
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
						"Leave Policy And Employment Links"
					],
					"operation": [
						"Patch Leave Policies By Employment ID"
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
						"Leave Policy And Employment Links"
					],
					"operation": [
						"Patch Leave Policies By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/leavepolicies/{leavePolicyId}/employments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy And Employment Links"
					],
					"operation": [
						"Get Employments By Leave Policy ID"
					]
				}
			}
		},
		{
			"displayName": "Leave Policy ID",
			"name": "leavePolicyId",
			"required": true,
			"description": "The unique identifier of the leave policy",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy And Employment Links"
					],
					"operation": [
						"Get Employments By Leave Policy ID"
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
						"Leave Policy And Employment Links"
					],
					"operation": [
						"Get Employments By Leave Policy ID"
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
						"Leave Policy And Employment Links"
					],
					"operation": [
						"Get Employments By Leave Policy ID"
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
						"Leave Policy And Employment Links"
					],
					"operation": [
						"Get Employments By Leave Policy ID"
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
						"Leave Policy And Employment Links"
					],
					"operation": [
						"Get Employments By Leave Policy ID"
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
						"Leave Policy And Employment Links"
					],
					"operation": [
						"Get Employments By Leave Policy ID"
					]
				}
			}
		},
		{
			"displayName": "PATCH /providers/employers/leavepolicies/{leavePolicyId}/employments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy And Employment Links"
					],
					"operation": [
						"Patch Employments By Leave Policy ID"
					]
				}
			}
		},
		{
			"displayName": "Leave Policy ID",
			"name": "leavePolicyId",
			"required": true,
			"description": "The unique identifier of the leave policy",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Leave Policy And Employment Links"
					],
					"operation": [
						"Patch Employments By Leave Policy ID"
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
						"Leave Policy And Employment Links"
					],
					"operation": [
						"Patch Employments By Leave Policy ID"
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
						"Leave Policy And Employment Links"
					],
					"operation": [
						"Patch Employments By Leave Policy ID"
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
						"Leave Policy And Employment Links"
					],
					"operation": [
						"Patch Employments By Leave Policy ID"
					]
				}
			}
		},
];
