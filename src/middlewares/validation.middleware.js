const validateRequiredFields = (requiredFields) => {
    return (req, res, next) => {
        const missingFields = [];

        for (const field of requiredFields) {
            if (req.body[field] === undefined || req.body[field] === null || req.body[field] === '') {
                missingFields.push(field);
            }
        }

        if (missingFields.length > 0) {
            return res.status(400).json({
                error: 'Campos obligatorios faltantes',
                missingFields
            });
        }

        next();
    };
};

const validateDataTypes = (fieldTypes) => {
    return (req, res, next) => {
        const errors = [];

        for (const [field, expectedType] of Object.entries(fieldTypes)) {
            const value = req.body[field];

            if (value !== undefined && value !== null) {
                let isValid = true;

                switch (expectedType) {
                    case 'string':
                        isValid = typeof value === 'string';
                        break;
                    case 'number':
                        isValid = typeof value === 'number' || !isNaN(Number(value));
                        break;
                    case 'boolean':
                        isValid = typeof value === 'boolean';
                        break;
                    case 'uuid':
                        isValid = typeof value === 'string' &&
                            /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value);
                        break;
                    case 'date':
                        isValid = !isNaN(Date.parse(value));
                        break;
                    case 'email':
                        isValid = typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
                        break;
                }

                if (!isValid) {
                    errors.push({ field, expectedType, receivedValue: value });
                }
            }
        }

        if (errors.length > 0) {
            return res.status(400).json({
                error: 'Tipos de datos inválidos',
                errors
            });
        }

        next();
    };
};

module.exports = {
    validateRequiredFields,
    validateDataTypes
};
