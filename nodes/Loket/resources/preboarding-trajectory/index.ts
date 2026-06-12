import type { INodeProperties } from 'n8n-workflow';

export const preboardingTrajectoryDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Preboarding Trajectory"
					]
				}
			},
			"options": [
				{
					"name": "Patch Preboarding Trajectory By Concept Employee ID",
					"value": "Patch Preboarding Trajectory By Concept Employee ID",
					"action": "Change status of a preboarding trajectory",
					"description": "__Activity name :__ PatchPreboardingTrajectoryByConceptEmployeeId\n",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/providers/employers/conceptemployees/{{$parameter[\"conceptEmployeeId\"]}}/preboardingtrajectory"
						}
					}
				},
				{
					"name": "Post Preboarding Trajectory By Concept Employee ID",
					"value": "Post Preboarding Trajectory By Concept Employee ID",
					"action": "Add a preboarding trajectory",
					"description": "__Activity name :__ PostPreboardingTrajectoryByConceptEmployeeId\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/conceptemployees/{{$parameter[\"conceptEmployeeId\"]}}/preboardingtrajectory"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "PATCH /providers/employers/conceptemployees/{conceptEmployeeId}/preboardingtrajectory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Preboarding Trajectory"
					],
					"operation": [
						"Patch Preboarding Trajectory By Concept Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Concept Employee ID",
			"name": "conceptEmployeeId",
			"required": true,
			"description": "The unique identifier of the concept employee",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Preboarding Trajectory"
					],
					"operation": [
						"Patch Preboarding Trajectory By Concept Employee ID"
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
						"Preboarding Trajectory"
					],
					"operation": [
						"Patch Preboarding Trajectory By Concept Employee ID"
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
						"Preboarding Trajectory"
					],
					"operation": [
						"Patch Preboarding Trajectory By Concept Employee ID"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Action",
			"name": "action",
			"type": "options",
			"default": "markAsCompleted",
			"description": "The action to perform on PreboardingTrajectory",
			"options": [
				{
					"name": "Mark As Completed",
					"value": "markAsCompleted"
				},
				{
					"name": "Mark As Ended Prematurely",
					"value": "markAsEndedPrematurely"
				}
			],
			"routing": {
				"send": {
					"property": "action",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Preboarding Trajectory"
					],
					"operation": [
						"Patch Preboarding Trajectory By Concept Employee ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/conceptemployees/{conceptEmployeeId}/preboardingtrajectory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Preboarding Trajectory"
					],
					"operation": [
						"Post Preboarding Trajectory By Concept Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Concept Employee ID",
			"name": "conceptEmployeeId",
			"required": true,
			"description": "The unique identifier of the concept employee",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Preboarding Trajectory"
					],
					"operation": [
						"Post Preboarding Trajectory By Concept Employee ID"
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
						"Preboarding Trajectory"
					],
					"operation": [
						"Post Preboarding Trajectory By Concept Employee ID"
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
						"Preboarding Trajectory"
					],
					"operation": [
						"Post Preboarding Trajectory By Concept Employee ID"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "b14acd0d-75d7-4fc8-8b22-4a3924585cab",
			"description": "The unique identifier of an object (GUID/UUID)\n",
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
						"Preboarding Trajectory"
					],
					"operation": [
						"Post Preboarding Trajectory By Concept Employee ID"
					]
				}
			}
		},
];
