module.exports = {
    getHtml(json) {
        let html = '<head><title>simple-node-express</title>';
        html += `<style>
@import 'https://fonts.googleapis.com/css?family=Open+Sans';
* {
	box-sizing: border-box;
}
body {
	font-family: 'Open Sans', sans-serif;
	line-height: 1.75em;
	font-size: 16px;
	background-color: #222;
	color: #aaa;
}

.simple-container {
	padding-top: 10px;
	padding-left: 10px;
}
.simple-div {
    padding: 0;
	margin-left: 20px;
}
.simple-print {
	fill: white;
	stroke: white;
}
.simple-print svg {
	height: 100%;
}

.simple-close {
	color: white;
	border-color: white;
}

.simple-ext-info {
	border-top: 1px solid #aaa;
}

p {
	font-size: 16px;
}

h1 {
	font-size: 30px;
	line-height: 34px;
}

h2 {
	font-size: 20px;
	line-height: 25px;
}

h3 {
	font-size: 16px;
	line-height: 27px;
	padding-top: 15px;
	padding-bottom: 15px;
	border-bottom: 1px solid #D8D8D8;
	border-top: 1px solid #D8D8D8;
}

hr {
	height: 1px;
	background-color: #d8d8d8;
	border: none;
	width: 100%;
	margin: 0;
}

a[href] {
	color: #1e8ad6;
}

a[href]:hover {
	color: #3ba0e6;
}

img {
	max-width: 100%;
}

li {
	line-height: 1.5em;
}

aside,
[class *= "sidebar"],
[id *= "sidebar"] {
	max-width: 90%;
	margin: 0 auto;
	border: 1px solid lightgrey;
	padding: 5px 15px;
}

@media (min-width: 1921px) {
	body {
		font-size: 15px;
	}
}
</style></head>
`;

        html += `<body><div class="simple-container">`;
        html += printObject(json);
        html += '</div><br></body></head>';

        return html;
    }
};

const printValue = (value) => {
    if (typeof value === 'string' && !value.includes('<')) {
        return `"${value}"<br>`;
    }
    if (typeof value === 'object') {
        if (Object.keys(value).length === 0) {
            return '<br>';
        }
        return `<div class="simple-div">${printObject(value)}</div>`;
    }
    return `${value.toString()}<br>`;
}

const printObject = (json) => {
    let response = `{<div class="simple-div">`;
    Object.entries(json).forEach(([key, value]) => {
        response += `<strong>"${key}"</strong>: ${printValue(value)}`;
    });
    return response + '</div>}';
}
