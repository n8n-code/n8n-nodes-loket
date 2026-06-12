import type { INodeProperties } from 'n8n-workflow';

export const downloadRequestDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Download Request"
					]
				}
			},
			"options": [
				{
					"name": "Get Download Requests By Bearer Token",
					"value": "Get Download Requests By Bearer Token",
					"action": "List of download requests for an employment",
					"description": "__Activity name:__ GetDownloadRequestsByBearerToken\n    \n\nGet the list of download requests for an employment\n\n__Note:__ The module (product) has to be activited for all the employers the user has access to. The same holds true for the permissions (rechten) of the users for these employers.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/users/downloadrequests"
						}
					}
				},
				{
					"name": "Post Download Request By Bearer Token",
					"value": "Post Download Request By Bearer Token",
					"action": "Create a download request",
					"description": "__Activity name:__ PostDownloadRequestByBearerToken\n    \n\nCreate a download request for an employment\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/users/downloadrequests"
						}
					}
				},
				{
					"name": "Delete Download Request By Download Request ID",
					"value": "Delete Download Request By Download Request ID",
					"action": "Delete a specific download request record",
					"description": "__Activity name:__ DeleteDownloadRequestByDownloadRequestId\n\nDelete a download request for the employment\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/users/downloadrequests/{{$parameter[\"downloadRequestId\"]}}"
						}
					}
				},
				{
					"name": "Get Download Request By Download Request ID",
					"value": "Get Download Request By Download Request ID",
					"action": "Details of a download request record",
					"description": "__Activity name:__ GetDownloadRequestByDownloadRequestId\n\nGet the details of a download request record\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/users/downloadrequests/{{$parameter[\"downloadRequestId\"]}}"
						}
					}
				},
				{
					"name": "Get File By Download Request ID",
					"value": "Get File By Download Request ID",
					"action": "Download file of download request",
					"description": "__Activity name:__ GetFileByDownloadRequestId\n\nDownload the file of a download request record\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/users/downloadrequests/{{$parameter[\"downloadRequestId\"]}}/file"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/employers/users/downloadrequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Download Request"
					],
					"operation": [
						"Get Download Requests By Bearer Token"
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
						"Download Request"
					],
					"operation": [
						"Get Download Requests By Bearer Token"
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
						"Download Request"
					],
					"operation": [
						"Get Download Requests By Bearer Token"
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
						"Download Request"
					],
					"operation": [
						"Get Download Requests By Bearer Token"
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
						"Download Request"
					],
					"operation": [
						"Get Download Requests By Bearer Token"
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
						"Download Request"
					],
					"operation": [
						"Get Download Requests By Bearer Token"
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
						"Download Request"
					],
					"operation": [
						"Get Download Requests By Bearer Token"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/users/downloadrequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Download Request"
					],
					"operation": [
						"Post Download Request By Bearer Token"
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
						"Download Request"
					],
					"operation": [
						"Post Download Request By Bearer Token"
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
						"Download Request"
					],
					"operation": [
						"Post Download Request By Bearer Token"
					]
				}
			}
		},
		{
			"displayName": "Download Request Status",
			"name": "downloadRequestStatus",
			"type": "json",
			"default": "{\n  \"key\": 2,\n  \"value\": \"Bestand aangemaakt\"\n}",
			"routing": {
				"send": {
					"property": "downloadRequestStatus",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Download Request"
					],
					"operation": [
						"Post Download Request By Bearer Token"
					]
				}
			}
		},
		{
			"displayName": "Expiration Time",
			"name": "expirationTime",
			"type": "string",
			"default": "2018-05-16T15:16:49+02:00",
			"description": "The time at which the download will expire.",
			"routing": {
				"send": {
					"property": "expirationTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Download Request"
					],
					"operation": [
						"Post Download Request By Bearer Token"
					]
				}
			}
		},
		{
			"displayName": "Filename",
			"name": "filename",
			"type": "string",
			"default": "WerkgeverDownload.rar",
			"description": "The name of the download file.\n",
			"routing": {
				"send": {
					"property": "filename",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Download Request"
					],
					"operation": [
						"Post Download Request By Bearer Token"
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
						"Download Request"
					],
					"operation": [
						"Post Download Request By Bearer Token"
					]
				}
			}
		},
		{
			"displayName": "Latest Download Time",
			"name": "latestDownloadTime",
			"type": "string",
			"default": "2018-05-09T15:16:49+02:00",
			"description": "The time of the most recent download.",
			"routing": {
				"send": {
					"property": "latestDownloadTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Download Request"
					],
					"operation": [
						"Post Download Request By Bearer Token"
					]
				}
			}
		},
		{
			"displayName": "Processing Finished Time",
			"name": "processingFinishedTime",
			"type": "string",
			"default": "2018-05-09T15:16:49+02:00",
			"description": "The time when the download become available.",
			"routing": {
				"send": {
					"property": "processingFinishedTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Download Request"
					],
					"operation": [
						"Post Download Request By Bearer Token"
					]
				}
			}
		},
		{
			"displayName": "Request Time",
			"name": "requestTime",
			"type": "string",
			"default": "2018-05-08T15:16:49+02:00",
			"description": "The time at which the download request was created by the user",
			"routing": {
				"send": {
					"property": "requestTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Download Request"
					],
					"operation": [
						"Post Download Request By Bearer Token"
					]
				}
			}
		},
		{
			"displayName": "Year",
			"name": "year",
			"type": "number",
			"default": 2017,
			"description": "The year of the download request relates to",
			"routing": {
				"send": {
					"property": "year",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Download Request"
					],
					"operation": [
						"Post Download Request By Bearer Token"
					]
				}
			}
		},
		{
			"displayName": "DELETE /providers/employers/users/downloadrequests/{downloadRequestId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Download Request"
					],
					"operation": [
						"Delete Download Request By Download Request ID"
					]
				}
			}
		},
		{
			"displayName": "Download Request ID",
			"name": "downloadRequestId",
			"required": true,
			"description": "The unique identifier of the downloadRequest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Download Request"
					],
					"operation": [
						"Delete Download Request By Download Request ID"
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
						"Download Request"
					],
					"operation": [
						"Delete Download Request By Download Request ID"
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
						"Download Request"
					],
					"operation": [
						"Delete Download Request By Download Request ID"
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
						"Download Request"
					],
					"operation": [
						"Delete Download Request By Download Request ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/users/downloadrequests/{downloadRequestId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Download Request"
					],
					"operation": [
						"Get Download Request By Download Request ID"
					]
				}
			}
		},
		{
			"displayName": "Download Request ID",
			"name": "downloadRequestId",
			"required": true,
			"description": "The unique identifier of the downloadRequest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Download Request"
					],
					"operation": [
						"Get Download Request By Download Request ID"
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
						"Download Request"
					],
					"operation": [
						"Get Download Request By Download Request ID"
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
						"Download Request"
					],
					"operation": [
						"Get Download Request By Download Request ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/users/downloadrequests/{downloadRequestId}/file",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Download Request"
					],
					"operation": [
						"Get File By Download Request ID"
					]
				}
			}
		},
		{
			"displayName": "Download Request ID",
			"name": "downloadRequestId",
			"required": true,
			"description": "The unique identifier of the downloadRequest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Download Request"
					],
					"operation": [
						"Get File By Download Request ID"
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
						"Download Request"
					],
					"operation": [
						"Get File By Download Request ID"
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
						"Download Request"
					],
					"operation": [
						"Get File By Download Request ID"
					]
				}
			}
		},
];
