from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from users.models import Gender, SexPreference, User

class UserAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'first_name', 'last_name', 'is_staff',)
    list_filter = ('is_staff', 'is_superuser', 'is_active', 'groups',)
    ordering = ('username',)

admin.site.register(User, UserAdmin)
admin.site.register(Gender)
admin.site.register(SexPreference)