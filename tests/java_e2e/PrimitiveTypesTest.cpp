#pragma once
#include <cstdint>
#include <iostream>
#include "Desmos/Exporter.h"

class PrimitiveTester {
public:
    PrimitiveTester() {}
    virtual ~PrimitiveTester() {}

    // Methods taking and returning primitive types
    virtual int8_t testInt8(int8_t v) { return v + 1; }
    virtual uint8_t testUint8(uint8_t v) { return v + 1; }
    
    virtual int16_t testInt16(int16_t v) { return v + 1; }
    virtual uint16_t testUint16(uint16_t v) { return v + 1; }

    virtual int32_t testInt32(int32_t v) { return v + 1; }
    virtual uint32_t testUint32(uint32_t v) { return v + 1; }

    virtual int64_t testInt64(int64_t v) { return v + 1; }
    virtual uint64_t testUint64(uint64_t v) { return v + 1; }

    virtual float testFloat(float v) { return v + 1.5f; }
    virtual double testDouble(double v) { return v + 1.5; }

    virtual bool testBool(bool v) { return !v; }
    virtual char testChar(char v) { return v + 1; }
};

DESM_EXPORT_CLASS(PrimitiveTester);
