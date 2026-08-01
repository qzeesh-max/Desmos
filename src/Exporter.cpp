#include "Desmos/Exporter.h"
#include <unordered_map>
#include <string>
#include <cstring>

extern "C" {
    thread_local DesmThreadError desm_tls_error = {false, ""};

    DESM_EXPORT void* DESM_GetLastError() {
        return &desm_tls_error;
    }

    DESM_EXPORT void DESM_ClearLastError() {
        desm_tls_error.has_error = false;
        desm_tls_error.message[0] = '\0';
    }

    DESM_EXPORT void DESM_SetError(const char* msg) {
        desm_tls_error.has_error = true;
        std::strncpy(desm_tls_error.message, msg, sizeof(desm_tls_error.message) - 1);
        desm_tls_error.message[sizeof(desm_tls_error.message) - 1] = '\0';
    }
}

namespace desm {
    void set_error(const char* msg) {
        desm_tls_error.has_error = true;
        std::strncpy(desm_tls_error.message, msg, sizeof(desm_tls_error.message) - 1);
        desm_tls_error.message[sizeof(desm_tls_error.message) - 1] = '\0';
    }

    std::unordered_map<std::string, DesmClassRegistry>& get_global_registry() {
        static std::unordered_map<std::string, DesmClassRegistry> registry;
        return registry;
    }

    void register_class(const DesmClassRegistry& reg) {
        std::cout << "Registering class: '" << reg.class_name << "'" << std::endl;
        get_global_registry()[reg.class_name] = reg;
    }
}

extern "C" {
    DESM_EXPORT const DesmClassRegistry* DESM_GetRegistry(const char* class_name) {
        auto& reg = desm::get_global_registry();
        std::cout << "Looking up registry for: '" << class_name << "', total registered: " << reg.size() << std::endl;
        for (const auto& pair : reg) {
            std::cout << "  Registered: '" << pair.first << "'" << std::endl;
        }
        auto it = reg.find(class_name);
        if (it != reg.end()) {
            return &it->second;
        }
        return nullptr;
    }

    DESM_EXPORT void DESM_Free(void* ptr) {
        free(ptr);
    }
}
